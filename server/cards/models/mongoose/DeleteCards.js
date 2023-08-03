const mongoose = require("mongoose");

const deleteCardsSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  email: String,
});

const DeletedCards = mongoose.model("item", deleteCardsSchema, "archiveCards");

module.exports = DeletedCards;
