const invitedRegOpens = new Date('9 February 2023 12:00');
const invitedRegCloses = new Date('16 February 2023 00:00');
const participantLimit = 235;

const normalRegOpens = new Date('20 February 2023 12:00');
const normalRegCloses = new Date('12 March 2023 00:00');

const invitedRegOpen = () => {
  const timeNow = new Date;
  return timeNow >= invitedRegOpens && timeNow < invitedRegCloses;
};

const normalRegOpen = () => {
  const timeNow = new Date;
  return timeNow >= normalRegOpens && timeNow < normalRegCloses;
};

const regFull = async (client) => {
  try {
    const { rows } = await client.query(
      'SELECT COUNT(*) FROM participant'
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
      'price',
      'sillis',
      'solenn',
      'alcohol',
      'visible'
    ],
    properties: {
      name: { type: 'string', minLength: 1 },
      email: { type: 'string', minLength: 1 },
      avec: { type: 'string' },
      seating: { type: 'string' },
      allergies: { type: 'string' },
      comment: { type: 'string' },
      representing: { type: 'string' },
      price: { type: 'integer' },
      sillis: { type: 'boolean' },
      solenn: { type: 'boolean' },
      alcohol: { type: 'boolean' },
      visible: { type: 'boolean' },
    }
  }
};

const regRoutes = async (fastify) => {
  fastify.get('/', async (req, res) => {
    await res.sendFile('index.html');
  });

  fastify.get('/api/regstatus', async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      const invitedOpen = invitedRegOpen();
      const normalOpen = normalRegOpen();
      const isFull = await regFull(client);
      res.send({ isFull, invitedOpen, normalOpen });
    } catch (error) {
      console.log(error);
      res.code(400).send('Error fetching registration status');
    } finally {
      client.release();
    }
  });

  fastify.get('/api/participants', async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        'SELECT name, visible FROM participant ORDER BY created_at ASC'
      );
      const participants = rows.map(participant => participant.visible ? participant.name : '-');
      const normalParticipants = participants.slice(0, participantLimit);
      const reservParticipants = participants.slice(participantLimit);

      res.send({ normalParticipants, reservParticipants });
    } catch (error) {
      console.log(error);
      res.code(400).send('Error fetching participants');
    } finally {
      client.release();
    }
  });


  fastify.post('/api/participant', { schema: participantSchema }, async (req, res) => {
    const client = await fastify.pg.connect();
    try {
      const isFull = await regFull(client)
      if (!invitedRegOpen() && !normalRegOpen()) {
        res.status(403).send('Anmälan är stängd');
        return;
      }

      const participant = req.body;
      await client.query(
        `INSERT INTO participant(
          name,
          email,
          avec,
          seating,
          allergies,
          representing,
          comment,
          price,
          sillis,
          solenn,
          alcohol,
          visible
        ) 
         VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
        )`, [
          participant.name,
          participant.email,
          participant.avec,
          participant.seating,
          participant.allergies,
          participant.representing,
          participant.comment,
          participant.price,
          participant.sillis,
          participant.solenn,
          participant.alcohol,
          participant.visible
        ]
      );
      const message = isFull ? 'full' : 'Registration successful';
      res.status(201).send(message);
    } catch (error) {
      console.log(error);
      res.code(400).send('Error creating participant');
    } finally {
      client.release();
    }
  });

};

module.exports = regRoutes;