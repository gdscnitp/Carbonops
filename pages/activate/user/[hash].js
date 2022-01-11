import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import { useRouter } from "next/router"

const PendAcc=require('../../../models/PendingAccount')
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

const updateRecords = async (id) => {

    // var account =  await PendAcc.findById( id, "dob").exec();
    // console.log(account)
    // let accType = (account === undefined) ? "Organisation" : "Individual"
    // console.log(accType)
    //Remove from pending accounts
    await PendAcc.deleteOne({ _id: id });

    //save to verified accounts
    // const newVerifiedAccount = await VerAcc({email,password,contact,dob})
    // await newAccount.save()

}

//async removed from here to fix Objects not valid as react child issue
export default function Mycomponent(){
    const router = useRouter()
    var id = router.query.hash
    
    // console.log(router.pathname)

    updateRecords(id)
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
