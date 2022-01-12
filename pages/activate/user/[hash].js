import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import { useRouter } from "next/router"

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
async function verifyUser(id)
{
  const response =await  fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify({ id}),
    headers: {
      'Content-Type': 'application/json',
    }})
    console.log(response)
    const data = response.json();
    //console.log(data)
  if (!response.ok) {
    console.log("Error occured")
    //throw new Error(data.message || 'Something went wrong!');
  }

  // return data;
  return data;
}
 

//async removed from here to fix Objects not valid as react child issue
export default  function Mycomponent(){
    const router = useRouter()
    var id = router.query.hash;
    console.log(id);
    
    // console.log(router.pathname)
    //updateRecords(id)
     verifyUser(id);//how to await the promise here?
    
    //when the user is directed to this page, you have to remove user from pending collection
    
    //and save in verified accounts collection.
    //now check if the user is individual or organisation 
    //isOrg ?{si}: {}
    //if individual send the user to individual profile completion form, else send the user to
    //organisation profile completion form.
    //when you get all the data from the form
    //save in the respective final collection.(individual/organisation)
    
    // console.log(router.pathname)
    //verified users collection
    //after profile completion, save in respective schema.
    //create a function in lib to change send user from pending to respective collection, import it and use here
    return <div><h1>THis is a sample text </h1></div>
}
