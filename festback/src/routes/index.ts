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
            res.send("fuck you");
        
        } catch (e) {
            console.log(e);
            res.send("fuck you");
        }
    });
	app.post('/participant', async (req: Request, res: Response) => {
        try {
            const participantObj = req.body as IParticipant;

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

            await createParticipant(participantObj);
            console.log("Wtf");
        
        } catch (e) {
            console.log(e);
            res.send("fuck you");
        }
    });
};