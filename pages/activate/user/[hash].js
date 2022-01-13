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
    let resdata = response.json()
    
    console.log(resdata)
    
    
  if (!response.ok) {
    console.log("Error occured")
  }

  return resdata;
}
 

export default  function Mycomponent(){
    const router = useRouter()
    var id = router.query.hash;
    console.log(id);
    var url;
    // console.log(router.pathname)
  
      verifyUser(id).then((result)=>{
        console.log("result");
        console.log(result);
        url = result.data
      })
      //Now result.data has false meaning not organisation or true meaning organisation
      
    return <div><h1 style={{color: "#fff"}}>Your account is verified.{url} Please complete profile here: <Link href='../../login'><a>Login {url}</a></Link></h1></div>
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
