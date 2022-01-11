import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import { useRouter } from "next/router"

const PendAcc=require('../../../models/PendingAccount')
const VerifiedAcc = require('../../../models/VerifiedAcc')
//import { route } from "next/dist/server/router";
//import { route } from "next/dist/server/router"

// export default function ThisFunctiomn(req, res) {
//     const router = useRouter()
//   const { hash } = router.query
//   console.log(hash)

//     // if (!hash) {
//     //     sendError(res,"Please fill all fields",_,422)
//     // }

//     //const response = await fetch(`${process.env.DOMAIN}/api/activate/user/${hash}`)

//     // if (response.status >= 400){
//     //     sendError(res,"Invalid user")
//     // }else {
//     //     sendSuccess(res)
       
//     // }
// }

const updateRecords = async () => {
    const router = useRouter()
    var id = router.query.hash
    console.log(id);
    var account =  await PendAcc.findById( id).exec();
    console.log(account)

    let accType = (account.dob === undefined) ? "Organisation" : "Individual"
    console.log(accType)

    let isOrganisation = (accType === "Individual") ? false : true
    //adding to verified
    const verifiedAccount = await VerifiedAcc({...account,isOrganisation})
    await verifiedAccount.save()

    
    
    //Remove from pending accounts
    await PendAcc.deleteOne({_id : id},err=>{
       if (err) {console.log(err)}
       console.log("Deleted successfully");
    })

   

}

//async removed from here to fix Objects not valid as react child issue
export default function Mycomponent(){
    
    
    // console.log(router.pathname)

    updateRecords()
    //when the user is directed to this page, you have to remove user from pending collection

    //and save in verified accounts collection.
    //now check if the user is individual or organisation 
    //isOrg ?{si}: {}
    //if individual send the user to individual profile completion form, else send the user to
    //organisation profile completion form.
    //when you get all the data from the form
    //save in the respective final collection.(individual/organisation)
    
    //verified users collection
    //after profile completion, save in respective schema.
    //create a function in lib to change send user from pending to respective collection, import it and use here
    return <div><h1>THis is a sample text </h1></div>
}
