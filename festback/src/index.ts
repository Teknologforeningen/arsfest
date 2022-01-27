import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import { initRoutes } from "./routes";
import { cors } from 'cors';

createConnection().then(async connection => {

    let app = Express();

    app.use(BodyParser.json());
    app.use(cors())

    initRoutes(app);

    app.listen(5000);
    console.log("Server started on 5000");

}).catch(error => console.log(error));

