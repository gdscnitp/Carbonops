
const errorCodes = [
   [100, "Invalid Parameters"],
   [404,"Contact is not valid"],
   [201, "Created"],
   [203, "Non-Authoritative Information"],
   [204, " ID Successfully deleted"],
   [300, "Account Already exist using Different Mode Of Signup, Please Choose the correct Way of Sign in!"],
   [302, " Account Found"],
   [350, "Already subscribe to this platform"],
   [400, "Bad Request located"],
   [401, "Unauthorized Access"],
   [403, "Forbidden"],
   [404, "Not Found"],
   [409, "Conflict"],
   [429, "Too many requests"],
   [500, "password must contain one capital letter, Special charactor and numerical value"],
   [503, "Service Unavailable"],
   [600, "Otp is invalid"],
   [700, "Account Doesnot exists"],
   [800, "Access without token is not authorised"],
   [900, "Invalid Credentials"],
   [1400, "Email is invalid or disposal"]
  
]

module.exports= errorCodes

