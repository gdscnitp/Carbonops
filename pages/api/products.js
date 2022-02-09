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
        organisationId:organisationId,
        productName:productName,
        price:price,
        description:description,
        productImage:productImage,
        rating:rating,
        stockUnits,
        isRecyclable:isRecyclable,
        productUrl:productUrl,
      });

      if (
        !productName ||
        !price ||
        !description ||
        !productImage ||
        !productUrl
      ) {
        return sendError(res, "Please provide all values🚩", 11, 404);
      }

      console.log(prod);
      const createdProd = await prod.save();
      console.log(createdProd);

      return sendSuccess(res, prod);
    } catch (error) {
      console.log(error.message);
    }
  } else if (req.method === "DELETE") {
    initDB();
    console.log(req.body);
    const ProdId = {
      id: { $eq: req.body.id },
    };
    if (!ProdId.id) {
      return sendError(res, "Please provide the Correct Product Id🚩", 11, 404);
    }

    const info = await proSc.deleteOne({ _id: ProdId.id });
    console.log(info);
    if (info.deletedCount === 0) {
      return sendError(res, "Could not delete product🚩", 11, 404);
    }
    return sendSuccess(res, info);
  } else {
    return sendError(res, "Bad rquest", 8, 400);
  }
}
