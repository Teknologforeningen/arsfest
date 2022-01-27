import {Request, Response, Application} from 'express';

export const initRoutes = (app: Application) => {
	app.get('/participants', (req: Request, res: Response) => {
        console.log("Wtf");
        res.send("fuck you")
    });
	app.post('/participants', (req: Request, res: Response) => {

    });
};