
import jwt from "jsonwebtoken";

export const generateToken=(user)=>{
return jwt.sign(user,'secret',{
    expiresIn:"1d"
})
}