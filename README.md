# expressfest

Simple registration site written with React, Express & TypeORM for the annual ball at TF that might still be running [here](https://arsfest.tf.fi)

## Running the application

### Docker
A basic docker deployment is included, you can run it with
```
sudo docker-compose up --build -d
```

### Running without docker

#### Prerequisites
- node
- postgres (other databases should work aswell)


The application requires a database to function (postgres by default). The database can be configured in `festback/ormconfig.js`
 
The frontend and backend can be run separately with `cd directory && npm start`

When deploying the application the generated frontend files can be served by express with 
```
cd festfront && npm run build && cd ../festback && npm start
```

