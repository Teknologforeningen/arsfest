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
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      name TEXT,
      email TEXT,
      avec TEXT,
      seating TEXT,
      menu TEXT,
      allergies TEXT,
      representing TEXT,
      comment TEXT,
      price INTEGER,
      sillis BOOLEAN,
      solenn BOOLEAN,
      alcohol BOOLEAN,
      visible BOOLEAN
    );`
  );
};

module.exports = fastifyPlugin(dbConnection);