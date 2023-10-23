const accounts = require("../../accounts");

const getAllaccounts = (req, res) => {
  res.status(200).json(accounts);
};

const newAccount = (req, res) => {
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
};

const deletId = (req, res) => {
  console.log("gi");
  const id = req.params.id;
  accounts.forEach((account, index) => {
    if (account.id == id) {
      accounts.splice(index, 1);
    }
  });
  return res.status(200).json(accounts);
};

const updateAccounts = (req, res) => {
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
};

module.exports = {
  getAllaccounts,
  newAccount,
  deletId,
  updateAccounts,
};
