import { MdCardMembership } from "react-icons/md"
import {sendError,sendSuccess} from "../../utilities/response-helpers"

export default async function handler(req,res)
{
   if(req.method==='POST')
   {
       const {members,houseSize,food}=req.body;
       //validate the input
       let score=0;
       //for members
       if(members)
       {
            if(members==0)
            {
                score+=14;
            }else if(members==1)
            {
                score+=12;
            }else if(members===2)
            {
                score+=10;
            }else if(members===3)
            {
                score+=8;
            }else if(members===4)
            {
                score+=6;
            }else if(members===5)
            {
                score+=4;
            }else if(members>5)
            {
                score+=2;
            }
       }
       
       if(houseSize)
       {
           if(houseSize==="large")
           {
               score+=10
           }else if(houseSize==="medium")
           {
               score+=7;
           }else if(houseSize==="small")
           {
               score+=4;
           }else if(houseSize==="apartment")
           {
               score+=2;
           }
       }
      

   }
}