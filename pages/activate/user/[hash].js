// import { sendSuccess,sendError } from "../../utilities/response-helpers"
// import { useRouter } from "next/router"

// export default async function (req, res) {
//     const router = useRouter()
//   const { hash } = router.query
//   console.log(user)

//     if (!hash) {
//         sendError(res,"Please fill all fields",_,422)
//     }

//     const response = await fetch(`${process.env.DOMAIN}/api/activate/user/${hash}`)

//     if (response.status >= 400){
//         sendError(res,"Invalid user")
//     }else {
//         sendSuccess(res)
       
//     }
// }