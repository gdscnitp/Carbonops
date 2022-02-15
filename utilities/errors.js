
const errorCodes = {
   100: ["Invalid Parameters"],
   201: ["Created"],
   203: ["Non-Authoritative Information"],
   204: [" ID Successfully deleted"],
   300: ["Account Already exist using Different Mode Of Signup, Please Choose the correct Way of Sign in!"],
   302: [" Account Found"],
   350: ["Already subscribe to this platform"],
   400: ["Default- correct Error Index", "Verify Password/Contact strength or Email ID","Bad Request (NOT POST)"],
   401: ["Unauthorized Access","Couldnt find in DB"],
   403: ["Default- correct Error Index","Duplicate Names registered","No events found"],
   404: ["Default- correct Error Index","Event's Location Not Found","Missing Inputs or Wrong Inputs","Page Not Found"],
   409: ["Conflict"],
   429: ["Too many requests"],
   422: ["Default-422 status code","Unprocessable Entity"],
   500: ["password must contain one capital letter, Special charactor and numerical value"],
   503: ["Service Unavailable"],
   600: ["Otp is invalid"],
   700: ["Default- correct Error Index","Account Doesnot exists"],
   800: ["Access without token is not authorised"],
   900: ["Invalid Credentials"],
   // 400: ["Email is invalid or disposal"]

}
module.exports=errorCodes;
  
