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
  const username = req.body.username;
  if (!username) return res.status(400).json("please enter username");
  const newAccount = {
    id: newId,
    username: username,
    funds: 0,
  };
  accounts.push(newAccount);
  res.status(201).json(accounts);
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
  const { username, funds } = req.body;
  const account = accounts.find((account) => {
    return account.id == req.params.id;
  });
  if (username) {
    account.username = username;
  }
  if (funds) {
    account.funds = funds;
  }

  res.status(200).json(account);
});

app.listen(8000, () => {
  console.log("app is running in port 8000");
});
