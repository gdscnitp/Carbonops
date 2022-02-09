
import {sendError,sendSuccess} from "../../utilities/response-helpers"
//the higher the score, more co2 produced.
export default async function handler(req,res)
{
   if(req.method==='POST')
   {
       const {members,houseSize,meat,packagedFood}=req.body;
       //validate the input
       var score=0;
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

      if(meat)
      {
          if(meat=="daily")
          {
              score+=10;
          }
          else if(meat=="weekly")
          {
              score+=8;
          }
          else if(meat=="vegetarian")
          {
              score+=4;
          }
          else if(meat=="vegan")
          {
              score+=2;
          }
      }
      if(packagedFood)
      {
          if(packagedFood=="frequently")
          {
              score+=12;
          }
          else if(packagedFood=="balanced")
          {
              score+=12;
          }
          else if(packagedFood=="no")
          {
              score+=2;
          }
      }
      

   }
}