const express = require("express");

const {
  getAllaccounts,
  newAccount,
  deletId,
  updateAccounts,
} = require("./accounts.controllers");

const router = express.Router();

router.get("/accounts", getAllaccounts);

router.post("/accounts/", newAccount);

router.delete("/accounts/:id", deletId);

router.put("/accounts/:id", updateAccounts);

module.exports = router;
