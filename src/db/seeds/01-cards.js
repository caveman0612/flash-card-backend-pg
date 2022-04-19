/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const cards = require("../fixtures/db")["cards"];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE cards RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("cards").insert(cards);
    });
};
