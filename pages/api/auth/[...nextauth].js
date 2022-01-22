import NextAuth from "next-auth"
//import Providers from 'next-auth/providers';
import initDB from "../../../helpers/db"
var Individual =require('../../../models/Individual')
var Organisation=require("../../../models/Organisation")
//import { sendError,sendSuccess } from "../../../utilities/response-helpers";
let isValid
let user
import verifyPassword from "../../../lib/verifyPassword"
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
  session: {
    jwt: true,
  },
    providers: [
      CredentialsProvider({
        id: "credentials",
     // name: "Credentials",
      type: "credentials",
        async authorize(credentials)
        {
          initDB()
          //validate email on client side
          const userInd= await Individual.findOne({email: credentials.email})
          console.log(userInd)
          const userOrg=await Organisation.findOne({mailId: credentials.email})
          if(userOrg)
          console.log(userOrg)
          if(!userOrg && !userInd)
          {
            throw new Error('No user found!');
          }
          else
          {
            
             if(userInd)
             {
               user=userInd
                isValid = await verifyPassword(
                credentials.password,
                userInd.password
              );
             }
             else {
               user=userOrg
              isValid = await verifyPassword(
                credentials.password,
                userOrg.password
              );
             }
             if(!isValid)
             {
               throw new Error("Wrong Password");
             }
             else
             {
               console.log("successfully logged in");
                return { email: user.email };
             }
          }
          //connect to database
          //find the user in a specific collection,
          //if the user exits, check password
          //if password matched
          //log the user in, 
          //and create a session for the user
          //else return error
        }
      })
    ],
    secret: process.env.SECRET,
    pages: {
      signIn: '/login',
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    }
  })




    //[CredentialsProvider({
    //     name: 'Credentials',

    //     // credentials:{
    //     //     mailId: {  type: "email", placeholder: "Email" },
    //     //     password: {  type: "password", placeholder: "Password" },
    //     //     contact: {  type: "password", placeholder: "Password" },

    //     // },

    //     async authorize(credentials) {
    //        initDB();
    //         // const res = await fetch(`${process.env.DOMAIN}/api/signup`, {
    //         //     method: 'POST',
    //         //     body: JSON.stringify(credentials),
    //         //     headers: { "Content-Type": "application/json" }
    //         //   })
    //           // const user = await res.json()
        
    //           // // If no error and we have user data, return it
    //           // if (res.ok && user) {
    //           //   return user
    //           // }
    //           // // Return null if user data could not be retrieved
    //           // return null
    //     }
    // })],

