require('dotenv').config();
const fastify = require('fastify')({ logger: { level: 'error' } });
const cors = require('@fastify/cors');
const mainRoutes = require('./routes/mainEvent');
const sillisRoutes = require('./routes/sillis');
const dbConnection = require('./database');
const afterpartyRoutes = require('./routes/afterparty');

fastify.register(dbConnection);
fastify.register(cors);
fastify.register(mainRoutes);
fastify.register(sillisRoutes);
fastify.register(afterpartyRoutes);

const start = async () => {
  const PORT = process.env.PORT || 5000;
  fastify.listen({ port: PORT }, function (error) {
    if (error) {
      fastify.log.error(error);
    } else {
      console.log(`Server is now listening on port ${PORT}`);
    }

  });
};

start();
