// Update with your config settings.
require("dotenv").config();
const parse = require("pg-connection-string").parse;
const path = require("path");
const { DATABASE_URL } = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const pgconfig = parse(DATABASE_URL);

pgconfig.ssl = { rejectUnauthorized: true };

module.exports = {
  development: {
    client: "pg",
    connection: pgconfig,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: { directory: path.join(__dirname, "src", "db", "seeds") },
  },
  production: {
    client: "pg",
    connection: pgconfig,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: { directory: path.join(__dirname, "src", "db", "seeds") },
  },
};
