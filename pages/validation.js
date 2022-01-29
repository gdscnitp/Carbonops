import { sendError } from "../../../utilities/response-helpers";


export  function emailcheck(data){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(data) ) {
            console.log("valid email id");
        }
        else {
            console.log("invalid email id");
            return sendError(res,"Invalid Email ID",19,400);
        }
        
}

export  function passwordCheck(data){
    let re2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(re2.test(data)){
      console.log("strong password");
    }
    else{
      console.log("weak password");
      return sendError(res,"Weak Password",19,400);
    }
}

export function contactCheck(data){
    if(data.length!=10){
        console.log("contact no. must have 10 digits");
        return sendError(res,"contact no. must have 10 digits",19,400);
      }
      else{
        console.log("valid contact no.");
      }
}