import { useRouter } from "next/router"
import Link from 'next/link'


async function verifyUser(id)
{
  const response =await  fetch(`http://localhost:3000/api/update`, {
    method: 'POST',
    body: JSON.stringify({ id}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    console.log("=============="+response)
    let data = response.json()
    // const data = JSON.stringify(response);
    console.log(data)
    // let dataresp = JSON.parse(data)
    // console.log(dataresp)
    if (response.data){ isOrganization = response.data.split(" ").includes("organisation") 

    
    console.log(isOrganization)}
  if (!response.ok) {
    console.log("Error occured")
  }

  return data;
}
 

export default  function Mycomponent(){
    const router = useRouter()
    var id = router.query.hash;
    console.log(id);
    // console.log(router.pathname)
  
      verifyUser(id).then((result)=>{
        console.log(result);
      })
      
    return <div><h1 style={{color:"#fff"}}>Your account is verified. Please login here: <Link href='../../login'><a>Login</a></Link></h1></div>
}

//   ,(err)=>{
      //   if(err)
      //   {
      //     console.log(err)
      //   }
      //   else
      //   {
      //     console.log("verified")
      //   }
      // });//how to await the promise here?
   
    
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
