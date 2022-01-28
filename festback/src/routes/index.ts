import {Request, Response, Application} from 'express';
import { close } from 'inspector';
import { SimpleConsoleLogger } from 'typeorm';
import { createParticipant, IParticipant, getParticipants } from '../entity/Participant';

export const initRoutes = (app: Application) => {
	app.get('/participants', async (req: Request, res: Response) => {
        try {
            const participants = await getParticipants();
            res.send(participants);       
            console.log(participants)
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
	app.post('/participant', async (req: Request, res: Response) => {
        try {
            const regOpens = new Date('27 January 2022 20:00')
            const currentTime = new Date;
            if (currentTime < regOpens) {
                res.sendStatus(400);
                return;
            } 

            const participantObj = req.body as IParticipant;
            await createParticipant(participantObj);
            console.log("participant created");
            res.sendStatus(200);
        
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
};