import express, {Request, Response, Application} from 'express';
import { createParticipant, IParticipant, getParticipants } from '../entity/Participant';
const path = require('path');

const invitedRegOpens = new Date('31 January 2022 12:00');
const invitedRegCloses = new Date('7 February 2022 00:00');
const invitedLimit = 550;

const normalRegOpens = new Date('7 February 2022 12:00');
const normalRegCloses = new Date('15 February 2022 00:00');
const normalLimit = 675;

const invitedRegOpen = () => {
    const timeNow = new Date;
    return timeNow >= invitedRegOpens && timeNow < invitedRegCloses;
}

const normalRegOpen = () => {
    const timeNow = new Date;
    return timeNow >= normalRegOpens && timeNow < normalRegCloses;
}

const regFull = async () => {
    const timeNow = new Date;
    const participants = await getParticipants();            
    const participantLimit = timeNow < normalRegOpens ? invitedLimit : normalLimit;
    return participants.length >= participantLimit;
}

export const initRoutes = (app: Application) => {
	app.get('/api/regstatus', async (req: Request, res: Response) => {
        try {
            const invitedOpen = invitedRegOpen();
            const normalOpen = normalRegOpen();
            const isFull = await regFull();
            res.send({isFull, invitedOpen, normalOpen});
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
    app.get('/api/participants', async (req: Request, res: Response) => {
        try {
            const participants = await getParticipants();
            const normalParticipants = participants.slice(0, normalLimit);
            const reservParticipants = participants.slice(normalLimit);

            res.send({normalParticipants, reservParticipants});
            // console.log(participants)
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
	app.post('/api/participant', async (req: Request, res: Response) => {
        try {
            const isFull = await regFull();
            if (invitedRegOpen() && isFull) {
                res.status(409).send('Kvoten för inbjudna gäster är fylld');
                return;
            }

            if (!invitedRegOpen() && !normalRegOpen()) {
                res.status(403).send('Anmälan är stängd');
                return;
            }

            const participantObj = req.body as IParticipant;
            await createParticipant(participantObj);
            // console.log("participant created");
            
            if (isFull) {
                res.status(201).send('full')
            } else {
                res.sendStatus(201);
            }
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });

    app.use(express.static(path.resolve(__dirname, '../../../festfront/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(
            __dirname, '../../../festfront/build', 'index.html'
        )); 
    });
};