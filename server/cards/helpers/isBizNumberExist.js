const Card = require("../models/mongoose/Card");
const { handleError } = require("../../utils/errorHandler");

const isBizNumberExists = async (bizNumber, req, res) => {
  try {
    if (typeof +bizNumber !== "number")
      throw new Error("bizNumber must be a number");
    const card = await Card.findOne({ bizNumber }, { bizNumber: 1, _id: 0 });
    if (card)
      return handleError(res, 500, "Card with this bizNumber already exists");
    return bizNumber;
  } catch (error) {
    return handleError(res, 500, `bizNumberExist Error: ${error.message}`);
  }
};

module.exports = isBizNumberExists;
