import NextAuth from "next-auth"
import CredentialsProvider from `next-auth/providers/credentials`

export default NextAuth({
    providers: [CredentialsProvider({
        name: 'Credentials',

        credentials:{
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
        },
    })],
})