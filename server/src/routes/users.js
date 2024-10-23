// routes/users.js
module.exports = async function (fastify, opts) {
    const pool = opts.pool;
  
    fastify.get('/users', async (request, reply) => {
      try {
        const res = await pool.query('SELECT * FROM users');
        return res.rows;
      } catch (err) {
        fastify.log.error(err);
        reply.status(500).send({ error: 'Erro ao buscar usuários' });
      }
    });
  
    fastify.post('/users', async (request, reply) => {
      const { nome, email } = request.body;
      try {
        const res = await pool.query(
          'INSERT INTO users (nome, email) VALUES ($1, $2) RETURNING *',
          [nome, email]
        );
        reply.status(201).send(res.rows[0]);
      } catch (err) {
        fastify.log.error(err);
        reply.status(500).send({ error: 'Erro ao criar usuário' });
      }
    });
  };
  