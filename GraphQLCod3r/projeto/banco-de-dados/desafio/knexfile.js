// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'desafio_banco_graphql',
    user:     'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
