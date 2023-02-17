const afterpartyRegOpens = new Date(process.env.AFTERPARTY_REG_OPENS);
const afterpartyRegCloses = new Date(process.env.AFTERPARTY_REG_CLOSES);
const participantLimit = process.env.AFTERPARTY_LIMIT;

const regOpen = () => {
  const timeNow = new Date;
  return timeNow >= afterpartyRegOpens && timeNow < afterpartyRegCloses;
};

const regFull = async (client) => {
  try {
    const { rows } = await client.query(
      'SELECT COUNT(*) FROM afterpartyparticipant'
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

const afterpartyRoutes = async (fastify) => {
  fastify.get('/api/afterparty/regstatus', async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      const regOpen = regOpen();
      const isFull = await regFull(client);
      res.send({ isFull, regOpen });
    } catch (error) {
      console.log(error);
      res.code(400).send('Error fetching registration status');
    } finally {
      client.release();
    }
  });

  fastify.post('/api/afterparty/participant', { schema: participantSchema }, async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      if (!regOpen()) {
        res.status(403).send('Anmälan är stängd');
        return;
      }

      if (await regFull(client)) {
        res.status(403).send('Efterfesten är fullbokad');
        return;
      }

      const participant = req.body;
      await client.query(
        `INSERT INTO afterpartyparticipant(
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
      res.code(400).send('Error creating afterparty participant');
    } finally {
      client.release();
    }
  });
};

module.exports = afterpartyRoutes;