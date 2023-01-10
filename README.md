# Arsfest

Simple registration site written with Gatsby & Fastify for the annual ball at TF that might still be running [here](https://arsfest.tf.fi)

## Running the application
### Prerequisites
- docker
- docker-compose

A development environment can be started with
```
docker-compose -f docker-compose.dev up --build
```

To start a production environment, run
```
docker-compose up --build
```

The application can be accesse at [http://localhost:8000](http://localhost:8000)