import NextAuth from "next-auth";
//import Providers from 'next-auth/providers';
import initDB from "../../../helpers/db";
var Individual = require("../../../models/Individual");
var Organisation = require("../../../models/Organisation");
import verifyPassword from "../../../lib/verifyPassword";
import CredentialsProvider from "next-auth/providers/credentials";
let isValid;
let user;
let mail;
let isOrg;

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
            isOrg =false;
             userInd = await Individual.findOne({ email: credentials.email });
            break;
          case "organisation":
            isOrg=true;
             userOrg = await Organisation.findOne({
              mailId: credentials.email,
            });
            break;
          
        }

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
            user = userOrg;
            mail=user.mailId;
            isValid = await verifyPassword(
              credentials.password,
              userOrg.password
            );

          }
          if (!isValid) {
            console.log("Wrong Password")
            throw new Error("Invalid Credentials");
          } else {
            console.log("Successfully logged in");
            const user={ email: mail,
              isOrganisation:isOrg}
              //console.log(user)
            return Promise.resolve(user);
          }
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  }
  ,
  callbacks:{
    jwt: async ({token, user}) => {
     // console.log("data in token", user);
      if (user) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
    session: async ({session, token}) => {
      //console.log("data in session", token.user);
      session.user = token.user;
      return Promise.resolve(session);
    }
  }
});


