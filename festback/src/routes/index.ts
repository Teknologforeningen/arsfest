import express, {Request, Response, Application} from 'express';
import { createParticipant, IParticipant, getParticipants } from '../entity/Participant';
import cors from 'cors';
const path = require('path');

const regOpens = new Date('31 January 2022 12:00')
const participantLimit = 550;

var whitelist = ['https://arsfest.tf.fi',
                 'https://arsfest.teknolog.fi',
                 'https://arsfest.teknologforeningen.fi',
                 'https://arsfest.xn--teknologfreningen-7zb.fi']
var corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('Origin not allowed');
    }
  }
}

export const initRoutes = (app: Application) => {
	app.get('/api/participants', cors(corsOptions), async (req: Request, res: Response) => {
        try {
            const participants = await getParticipants();
            res.send(participants);       
            // console.log(participants)
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
	app.post('/api/participant', cors(corsOptions), async (req: Request, res: Response) => {
        try {
            const currentTime = new Date;
            if (currentTime < regOpens) {
                res.status(403).send('Anmälan har inte ännu öppnat');
                return;
            } 

            const participantAmount = await getParticipants();
            if (participantAmount.length >= participantLimit) {
                res.status(409).send('Kvoten är fylld');
                return;
            }
            const participantObj = req.body as IParticipant;
            await createParticipant(participantObj);
            // console.log("participant created");
            res.sendStatus(201);
        
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