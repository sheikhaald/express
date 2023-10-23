const express = require("express");
const products = require("./data");
const accounts = require("./accounts");
const app = express();
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.status(200).json({ products });
});

app.get("/api/accounts", (req, res) => {
  res.status(200).json(accounts);
});

app.post("/api/accounts/", (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  accounts.push({
    id: newId,
    username: req.body.username,
    funds: 0,
  });
  res.status(200).json(accounts);
});

app.delete("/api/accounts/:id", (req, res) => {
  console.log("gi");
  const id = req.params.id;
  accounts.forEach((account, index) => {
    if (account.id == id) {
      accounts.splice(index, 1);
    }
  });
  return res.status(200).json(accounts);
});

app.put("/api/accounts/:id", (req, res) => {
  const account = accounts.find((account) => {
    return account.id == req.params.id;
  });
  account = req.body;
  res.status(200).json(account);
});

app.listen(8000, () => {
  console.log("app is running in port 8000");
});
