import NextAuth from "next-auth"
import CredentialsProvider from `next-auth/providers/credentials`

export default NextAuth({
    providers: [CredentialsProvider({
        name: 'Credentials',

        credentials:{
            mailId: {  type: "email", placeholder: "Email" },
            password: {  type: "password", placeholder: "Password" },
            contact: {  type: "password", placeholder: "Password" },

        },

        async authorize(credentials, req) {
            const res = await fetch("/api/signup", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              // If no error and we have user data, return it
              if (res.ok && user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
        }
    })],
})