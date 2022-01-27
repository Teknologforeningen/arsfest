import {Request, Response, Application} from 'express';
import { createParticipant, IParticipant } from '../entity/Participant';

export const initRoutes = (app: Application) => {
	app.get('/participants', async (req: Request, res: Response) => {
        try {
            // const participantObj = req.body as IParticipant;

            // const participantObj: IParticipant = {
            //     namn: "kuk",
            //     email: "kuk@gmail.com",
            //     pris: 1000,
            //     avec: "test avec",
            //     sittplats: "Min kompis",
            //     sillis: true,
            //     solenn: true,
            //     representerar: "tf",
            //     alkohol: true,
            //     meny: "kuk kött",
            //     specialdieter: "Nej",
            //     buss: true,
            //     kommentarer: "Kakka"
            // }

            // await createParticipant(participantObj);
            console.log("Wtf");
            res.sendStatus(400);
        
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
        
        } catch (e) {
            console.log(e);
            res.sendStatus(400);
        }
    });
};