const fastifyPostgres = require('@fastify/postgres');
const fastifyPlugin = require('fastify-plugin');

const dbConnection = async (fastify, options) => {
  const db_host = process.env.DB_HOST || 'localhost';
  const db_user = process.env.DB_USER || 'arsfest';
  const db_password = process.env.DB_PW || 'arsfest';
  const db_name = process.env.DB_NAME || 'arsfest';

  await fastify.register(fastifyPostgres, {
    connectionString: `postgres://${db_user}:${db_password}@${db_host}/${db_name}`
  });

  const client = await fastify.pg.connect();
  await client.query(
    `CREATE TABLE IF NOT EXISTS participant (
      id SERIAL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE,
      name TEXT,
      email TEXT,
      price INTEGER,
      avec TEXT,
      seating TEXT,
      sillis BOOLEAN,
      solenn BOOLEAN,
      representing TEXT,
      alcohol BOOLEAN,
      menu TEXT,
      allergies TEXT,
      comment TEXT,
      visible BOOLEAN
    );`
  );
};

module.exports = fastifyPlugin(dbConnection);