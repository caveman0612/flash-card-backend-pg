const app = require("./app");

require("dotenv").config();
// const { PORT = 5000 } = process.env;
const PORT = process.env || "5000";

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
