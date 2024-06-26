const { PORT = 5002 } = process.env;

const app = require('./app');
const knex = require('./db/connection');
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
