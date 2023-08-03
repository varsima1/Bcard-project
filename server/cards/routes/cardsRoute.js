const express = require("express");
const {
  getCards,
  getCard,
  createCard,
  EditCard,
  LikeCard,
  DeleteCard,
  getMyCards,
  changeBizNumber,
} = require("../controllers/cardsController");
const auth = require("../../auth/authService");
const router = express.Router();

router.get("/", getCards);
router.get("/my-cards", auth, getMyCards);
router.patch("/biz-number/:cardId", auth, changeBizNumber);
router.get("/:cardId", getCard);
router.post("/", auth, createCard);
router.put("/:cardId", auth, EditCard);
router.patch("/:cardId", auth, LikeCard);
router.delete("/:cardId", auth, DeleteCard);

module.exports = router;
