require("dotenv").config();
const { Pool } = require("pg");

const database = new Pool({
  host: "localhost",
  user: "postgres",
  password: "oaiowas567",
  database: "likeme",
  allowExitOnIdle: true,
});

module.exports = database;
