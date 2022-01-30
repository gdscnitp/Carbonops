//A file to check all APIS
import mongoose from "mongoose";
import initDB from "../../helpers/db";
import { sendSuccess, sendError } from "../../utilities/response-helpers";
var proSc = require("../../models/Product");
// console.log(proSc)

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      var {
        organisationId,
        productName,
        price,
        description,
        productImage,
        rating,
        stockUnits,
        isRecyclable,
        productUrl,
      } = req.body;

      initDB();
      var prod = new proSc({
        organisationId,
        productName,
        price,
        description,
        productImage,
        rating,
        stockUnits,
        isRecyclable,
        productUrl,
      });

      console.log(prod);
      const createdProd = await prod.save();
      console.log(createdProd);

      return sendSuccess(res, prod);
    } catch (error) {
      console.log(error.message);
    }
  } else if (req.method === "DELETE") {
    console.log(req.body);
    const ProdId = {
      id: { $eq: req.body.id },
    };
    initDB();
    try {
      const info = await proSc.deleteOne({ _id: ProdId.id });
      console.log(info);
    } catch (error) {
      console.log(error.message);
    }
    return sendSuccess(res, info);
  } else {
    return sendSuccess(res, { message: "This works" });
  }
}
