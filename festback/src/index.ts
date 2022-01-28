import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import * as BodyParser from 'body-parser';
import cors from 'cors';
import { initRoutes } from "./routes";

createConnection().then(async connection => {

    try {
        const app = express();

        app.use(BodyParser.json());

//        app.use(cors())

        initRoutes(app);

        const path = require('path');

        app.use(express.static(path.resolve(__dirname, '../../festfront/build')));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(
                __dirname, '../../festfront/build', 'index.html'
            )); 
        });

        app.listen(5000);
        console.log("Server started on 5000");
    } catch (e) {
        console.log(e);
    }

}).catch(error => console.log(error));

