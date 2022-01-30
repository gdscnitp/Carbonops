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
      // for addition of products

      // var userId = {
      //   id: { $eq: req.body.id },
      // };
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
      // let info = await proSc.deleteOne({ _id: { $eq: "req.body.id" } });
      // //info is delete info in form of delete count
      // console.log(info);
      //const entry = await proSc.create({ productName: "Masteringjs.io" });
      //console.log(await proSc.countDocuments({ _id: entry._id })); // 1

      // Delete the document by its _id

      //console.log(await proSc.countDocuments({ _id: entry._id }));

      // mongoose.connection.close();

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
    const info = await proSc.deleteOne({ _id: ProdId.id });
    console.log(info);
    return sendSuccess(res, info);
  } else {
    return sendSuccess(res, { message: "This works" });
  }
}
