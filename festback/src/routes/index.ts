import express, {Request, Response, Application} from 'express';
import { createParticipant, IParticipant, getParticipants } from '../entity/Participant';
const path = require('path');

export const initRoutes = (app: Application) => {
	app.get('/api/participants', async (req: Request, res: Response) => {
        try {
            const participants = await getParticipants();
            res.send(participants);       
            // console.log(participants)
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
	app.post('/api/participant', async (req: Request, res: Response) => {
        try {
            const regOpens = new Date('31 January 2022 12:00')
            const currentTime = new Date;
            if (currentTime < regOpens) {
                res.sendStatus(400);
                return;
            } 

            const participantObj = req.body as IParticipant;
            await createParticipant(participantObj);
            // console.log("participant created");
            res.sendStatus(200);
        
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