const express = require('express');
require('dotenv').config();
const route = require('./src/config/Paciente_routes');
const database = require('./src/config/database');

database.authenticate().then(() => {
  database;
});

let app = express();
app.use(express.json());

route(app);
database.sync({ alter: true });
app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000');
});
