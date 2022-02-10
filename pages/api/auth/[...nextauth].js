import NextAuth from "next-auth";
//import Providers from 'next-auth/providers';
import initDB from "../../../helpers/db";
var Individual = require("../../../models/Individual");
var Organisation = require("../../../models/Organisation");
//import { sendError,sendSuccess } from "../../../utilities/response-helpers";
let isValid;
let user;
let mail;
import verifyPassword from "../../../lib/verifyPassword";
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

  
      async authorize(credentials) {
        initDB();
        console.log(credentials);
        const userCategory = credentials.category
        console.log(userCategory);
        let userInd;
        let userOrg;
        switch(userCategory) {
          case "individual":
             userInd = await Individual.findOne({ email: credentials.email });
            break;
          case "organisation":
             userOrg = await Organisation.findOne({
              mailId: credentials.email,
            });
            break;
          
        }
        //validate email on client side
        //console.log(userInd);
        //if (userOrg) console.log(userOrg);

        if (userCategory==="individual" && !userInd) {
          throw new Error("Invalid credentials");
        } 
        else if (userCategory==="organisation" && !userOrg) {
          throw new Error("Invalid credentials");

        } else {
          if (userInd) {
            user = userInd;
            mail=user.email;
            isValid = await verifyPassword(
              credentials.password,
              userInd.password
            );
          } else {
           // console.log("user is org")
            user = userOrg;
            mail=user.mailId;
            isValid = await verifyPassword(
              credentials.password,
              userOrg.password
            );

          }
          if (!isValid) {
            console.log("Wrong Password")
            throw new Error("Wrong Password");
          } else {
            console.log("successfully logged in");
           // console.log(mail)
            return { email: mail };
          }
        }
        //connect to database
        //find the user in a specific collection,
        //if the user exits, check password
        //if password matched
        //log the user in,
        //and create a session for the user
        //else return error
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});


