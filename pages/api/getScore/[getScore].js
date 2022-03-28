import initDB from "../../../helpers/db"
import mongoose from "mongoose";
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import scoresc from "../../../models/Score"
var Indiv =require("../../../models/Individual")


initDB();

export default async function handler(req, res) {
 if(req.method === 'GET'){
  const email = req.query.getScore;

  const indivMail = {
    mail: {$eq : email}
  };
      const scrs= await scoresc.find({ email : indivMail.mail});
      if(scrs.length>0)
        return sendSuccess(res, scrs);
        else
        return sendError(res,"Could not fetch your score",3,403);
    }

  else {
    return sendError(res, "Bad request", 2, 400);
  }
}

