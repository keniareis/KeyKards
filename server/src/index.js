// index.js
require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const { Pool } = require('pg');
fastify.register(require('./routes/users'), { pool });


// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Verifica a conexão com o banco de dados
pool.connect((err, client, release) => {
  if (err) {
    fastify.log.error('Erro ao conectar ao PostgreSQL', err);
    process.exit(1);
  } else {
    fastify.log.info('Conectado ao PostgreSQL');
    release();
  }
});



// Rota de teste
fastify.get('/', async (request, reply) => {
  return { mensagem: 'Olá, mundo!' };
});

// Inicia o servidor
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    fastify.log.info(`Servidor rodando na porta ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
