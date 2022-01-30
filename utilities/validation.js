import { sendError } from "../utilities/response-helpers";


export  function emailCheck(data){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(data) ) {
            console.log("valid email id");
            return true;
        }
        else {
            console.log("invalid email id");
            return false;
        }
        
}

export  function passwordCheck(data){
    let re2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(re2.test(data)){
      console.log("strong password");
      return true;
    }
    else{
      console.log("weak password");
      return false;
    }
}

export function contactCheck(data){
    if(data.length!=10){
        console.log("contact no. must have 10 digits");
        return false;
      }
      else{
        console.log("valid contact no.");
        return true;
      }
}