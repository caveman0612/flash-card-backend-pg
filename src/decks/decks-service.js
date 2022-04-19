const knex = require("../db/connections");

function list() {
  return knex("decks").select();
}

module.exports = { list };
