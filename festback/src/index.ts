import "reflect-metadata";
import {createConnection} from "typeorm";
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import { initRoutes } from "./routes";
//import { cors } from 'cors';

createConnection().then(async connection => {

    const app = Express();

    app.use(BodyParser.json());
    // app.use(cors())

    initRoutes(app);

    app.listen(5000);
    console.log("Server started on 5000");
    const path = require('path');

    app.use(Express.static(path.resolve(__dirname, '../../festfront/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(
            __dirname, '../../festfront/build', 'index.html'
        )); 
    });

}).catch(error => console.log(error));

