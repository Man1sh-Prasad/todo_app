import { User } from "../models/user.model.js"

export async function userMiddleware(req, res, next) {
   try {
        const id = req.body.id;
        const existingUser = await User.findById(id);
        if(existingUser) {
            next();
        } else {
            return res.status(403).json({msg: "You are not authenticated"});
        }
   } catch(error) {
        return res.status(400).json({msg: 'Incorrect inputs'})
   }
}