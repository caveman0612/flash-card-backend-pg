const services = require("./decks-service");

async function list(req, res, next) {
  const data = await services.list();
  res.json({ data });
}

module.exports = { list };
