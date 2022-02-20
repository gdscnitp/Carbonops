import initDB from '../../../helpers/db';
import { sendSuccess, sendError } from '../../../utilities/response-helpers';
import { emailCheck } from '../../../utilities/validation';
import organisationSchema from '../../../models/Organisation';

initDB();

export default async function handler(req, res) {
  console.log(req.query);
  if (req.method === 'GET') {
    const mailId = req.query.organisationDashboard;
    // const mailId = req.body.mailId;
    const mail = {
      email: {$eq : mailId}
    };
    //console.log(mailId);
    // checking if mail is valid or not
    //console.log(mail.email)
    const checkMail = emailCheck(mailId);
    if (checkMail) {
      // console.log(mail.email);
      const Org = await organisationSchema.find({ mailId: mail.email });

      if (Org.length <= 0) return sendError(res, 'Not Found', 11, 404);

      if (Org.length <= 0) return sendError(res, 'Not Found', 1, 401);

      else {
        // console.log(Org);
        if (Org) {
          console.log(Org)
          return sendSuccess(res, Org);
        } else {

          return sendError(res, 'User Not Found', 11, 404);
        }
      }
    } else {
      return sendError(res, 'Email Invalid', 11, 400);
    }
  } else {
    return sendError(res, 'Bad rquest(NOT GET)', 8, 400);

          return sendError(res, 'User Not Found', 1, 401);
        }
      }
    } else {
      return sendError(res, 'Email Invalid', 1, 400);
    }
  } 

  // ROUTE FOR UPDATING ORGANISATION DETAILS
  else if(req.method==="PATCH"){

    const mailId = req.query.organisationDashboard;
    // const mailId = req.body.mailId;
    const mail = {
      email: {$eq : mailId}
    };

    const toUpdate = req.body;
    const { organisationName,type ,description,website ,linkedin ,area,city,state,pincode,nation} = toUpdate;
            // console.log(toUpdate);
            const location = {area,city,state,pincode,nation};

    if (!organisationName && !type && !area && !city && !state && !pincode && !nation && !description && !website && !linkedin) {
      return sendError(res, "Fill at least one field",2, 404)
  }  

    if ((area || state || pincode || nation || city)){
      if(!area || !state || !pincode || !nation || !city)
      {
          return sendError(res, "Fill all address fields",2, 404)
      }  
  }

  for (const userdata in toUpdate ){
    //console.log(userdata)
    if (userdata === "organisationName" && organisationName !== ''){

        updatedOrg = await organisationSchema.findOneAndUpdate( { mailId: mail.email }, 
            {"$set":{"organisationName":organisationName}},
            { new: true })

    }
    else if (userdata === "type" && type !== ''){
       updatedOrg = await organisationSchema.findOneAndUpdate( { mailId: mail.email }, 
            {"$set":{"type":type}},
            { new: true })
    }

    else if (userdata === "description" && description !== ''){
       updatedOrg = await organisationSchema.findOneAndUpdate( { mailId: mail.email }, 
            {"$set":{"description":description}},
            { new: true })
    }
    else if (userdata === "website" && website !== ''){
       updatedOrg = await organisationSchema.findOneAndUpdate( { mailId: mail.email }, 
            {"$set":{"website":website}},
            { new: true })
    }
    else if (userdata === "linkedin" && linkedin !== ''){
       updatedOrg = await organisationSchema.findOneAndUpdate( { mailId: mail.email }, 
            {"$set":{"linkedin":linkedin}},
            { new: true })
    }
    else if (userdata === "area" || userdata === "city" ||  userdata === "state" || userdata === "pincode" || userdata === "nation" && area !== '' && city !== '' && state !== '' && pincode !== '' && nation !== ''){
       updatedOrg = await organisationSchema.findOneAndUpdate( { mailId: mail.email }, 
          {"$set":{"location":location}},
          { new: true })
  }

} 
    return sendSuccess(res, updatedOrg);
}

  else {
    return sendError(res, 'Bad request', 2, 400);

  }
}

