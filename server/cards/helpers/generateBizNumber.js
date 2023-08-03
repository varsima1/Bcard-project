const lodash = require("lodash");
const Card = require("../models/mongoose/Card");
const { handleError } = require("../../utils/errorHandler");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(1_000_000, 9_000_000);
    const card = await Card.findOne(
      { bizNumber: random },
      { bizNumber: 1, _id: 0 }
    );
    if (card) return generateBizNumber();
    // return Promise.resolve(random);
    return random;
  } catch (error) {
    return handleError(res, 500, `generateBizNumber Error: ${error.message}`);
  }
};

// const isBizNumberExists = async (bizNumber) => {
//   try {
//     if (typeof +bizNumber !== "number")
//       throw new Error("bizNumber must be a number");
//     const card = await Card.findOne({ bizNumber }, { bizNumber: 1, _id: 0 });
//     if (card) throw new Error("Card with this bizNumber already exists");
//     return bizNumber;
//   } catch (error) {
//     return handleError(res, 500, `bizNumberExist Error: ${error.message}`);
//   }
// };

module.exports = generateBizNumber;
// exports.isBizNumberExists = isBizNumberExists;
