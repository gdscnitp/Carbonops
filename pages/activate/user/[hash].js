import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import { useRouter } from "next/router"
import { route } from "next/dist/server/router";
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

export default function Mycomponent(){
    
    const router=useRouter();
    console.log(router.query)
    console.log(router.pathname)
    //verified users.
    //after profile completion, save in respective schema.
    //create a function in lib to change send user from pending to respective collection, import it and use here
    return <div><h1>THis is a sample text </h1></div>
}
