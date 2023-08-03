const express = require("express");
const router = express.Router();
const cardsRoute = require("../cards/routes/cardsRoute");
const { handleError } = require("../utils/errorHandler.js");
const usersRoute = require("../users/routes/usersRoute");

router.use("/users", usersRoute);
router.use("/cards", cardsRoute);
router.use(/* "*", */ (req, res) => handleError(res));

module.exports = router;
