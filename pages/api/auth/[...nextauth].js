// import NextAuth from "next-auth"
// //import CredentialsProvider from `next-auth/providers/credentials`;
// import Providers from 'next-auth/providers';
// import initDB from "../../../helpers/db"

// export default NextAuth({
//     providers: [
//       Providers.credentials({
//         async authorize(credentials)
//         {
//           //connect to database
//           //find the user in a specific database,
//           //if the user exits, check password
//           //if password matched
//           //log the user in, 
//           //and create a session for the user
//           //else return error
//         }
//       })
//     ]
//     //[CredentialsProvider({
//     //     name: 'Credentials',

//     //     // credentials:{
//     //     //     mailId: {  type: "email", placeholder: "Email" },
//     //     //     password: {  type: "password", placeholder: "Password" },
//     //     //     contact: {  type: "password", placeholder: "Password" },

//     //     // },

//     //     async authorize(credentials) {
//     //        initDB();
//     //         // const res = await fetch(`${process.env.DOMAIN}/api/signup`, {
//     //         //     method: 'POST',
//     //         //     body: JSON.stringify(credentials),
//     //         //     headers: { "Content-Type": "application/json" }
//     //         //   })
//     //           // const user = await res.json()
        
//     //           // // If no error and we have user data, return it
//     //           // if (res.ok && user) {
//     //           //   return user
//     //           // }
//     //           // // Return null if user data could not be retrieved
//     //           // return null
//     //     }
//     // })],
// })