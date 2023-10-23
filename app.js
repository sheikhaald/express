const express = require("express");
const products = require("./data");
const accounts = require("./accounts");
const router = require("./api/accounts/accounts.routes");
const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(8000, () => {
  console.log("app is running in port 8000");
});
