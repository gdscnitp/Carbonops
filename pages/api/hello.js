// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendSuccess,sendError } from "../../utilities/response-helpers";

export default function handler(req, res) {
 // res.status(200).json({ name: 'John Doe' })
 sendSuccess(res,{"message": "This works"});// testing response helpers
 //use these helpers to send response from your API
 //sendError(res,"error",0,404);
}
