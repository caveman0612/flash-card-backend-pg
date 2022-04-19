/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const decks = require("../fixtures/db")["decks"];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE decks RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("decks").insert(decks);
    });
};
