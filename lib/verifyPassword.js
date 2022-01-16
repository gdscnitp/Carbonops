import {compare} from "bcryptjs";

export default async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
  }
