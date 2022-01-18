import { useRouter } from "next/router"
import Link from 'next/link'


export default  function Mycomponent({id,profHref}){
    // const router = useRouter()
    // var id = router.query.hash;
    console.log(id);
   
      
    return <div><h1 style={{color: "#fff"}}>{id} Your account is verified. Please complete profile here: <Link href={`../../${profHref}/${id}`}><a>Profile Comp </a></Link></h1></div>
}

export async function getServerSideProps(context)
{
 
    var id = context.params.hash;
    console.log(id);
    const response =await  fetch('http://localhost:3000/api/update',{
      method: 'PUT',
      body: JSON.stringify({id}),
      headers: {
        'Content-Type': 'application/json',
      }})
      const data = await  response.json();
      console.log(data)
      if(!response.ok)
      return{
        notFound: true,
      }
      const isOrg=data.data;
      console.log(isOrg)
      const profHref= isOrg ? "profile-organisation-form": "profile-individual-form"
      
    return {
      props:{
        id,profHref
      }
    }
}

    
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
// var url;
    // console.log(router.pathname)
  
      //verifyUser(id);
      //Now result.data has false meaning not organisation or true meaning organisation

      // async function verifyUser(id)
// {
//   const response =await  fetch(`http://localhost:3000/api/update`, {
//     method: 'POST',
//     body: JSON.stringify({ id: id}),
//     headers: {
//       'Content-Type': 'application/json'
//     }})
//     let resdata = response.json()
    
//     console.log(resdata)
    
    
//   if (!response.ok) {
//     console.log("Error occured")
//   }

//   return resdata;
// }
 