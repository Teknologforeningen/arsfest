const sillisRegOpens = new Date(process.env.SILLIS_REG_OPENS);
const sillisRegCloses = new Date(process.env.SILLIS_REG_CLOSES);
const participantLimit = process.env.SILLIS_LIMIT;

const regOpen = () => {
  const timeNow = new Date;
  return timeNow >= sillisRegOpens && timeNow < sillisRegCloses;
};

const regFull = async (client) => {
  try {
    const { rows } = await client.query(
      'SELECT COUNT(*) FROM sillisparticipant'
    );
    return parseInt(rows[0].count) >= participantLimit;
  }
  catch (error) {
    console.log(error);
    return true;
  }
};

const participantSchema = {
  body: {
    type: 'object',
    required: [
      'name',
      'email',
    ],
    properties: {
      name: { type: 'string', minLength: 1 },
      email: { type: 'string', minLength: 1 },
    }
  }
};

const sillisRoutes = async (fastify) => {
  fastify.get('/api/sillis/regstatus', async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      const isFull = await regFull(client);
      res.send({ isFull, regOpen: regOpen() });
    } catch (error) {
      console.log(error);
      res.code(400).send('Error fetching registration status');
    } finally {
      client.release();
    }
  });

  fastify.post('/api/sillis/participant', { schema: participantSchema }, async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      if (!regOpen()) {
        res.status(403).send('Anmälan är stängd');
        return;
      }

      if (await regFull(client)) {
        res.status(403).send('Sillisen är fullbokad');
        return;
      }

      const participant = req.body;
      await client.query(
        `INSERT INTO sillisparticipant(
          name,
          email
        ) 
         VALUES (
          $1, $2
        )`, [
          participant.name,
          participant.email,
        ]
      );

      res.status(201).send('Registration successful');
    } catch (error) {
      console.log(error);
      res.code(400).send('Error creating sillis participant');
    } finally {
      client.release();
    }
  });
};

module.exports = sillisRoutes;