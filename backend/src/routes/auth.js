import { Router } from 'express';
import { User } from '../models/user.model.js';
import { userSchema } from '../types.js';
import bcrypt from 'bcryptjs'


const router = Router();

// sign in
router.post("/register", async(req, res) => {
    try {
        const {email, password, username} = req.body;

        const hashPassword = bcrypt.hashSync(password);

        const user = new User({
            email: email, 
            password: hashPassword,
            username: username
        })

        // validate data 
        const validateUser = userSchema.safeParse(user)
        if( !validateUser.success) {
            return res.status(411).json({error: "invalid input"})
        }

        // check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({error: "user already exists"})
        }
   
        // save the new user to database
        await user.save()
        return res.status(200).json({msg: "user created successfully"})

    } catch(error) {
        res.status(400).json({msg: "error while registering user"})
    }
})

// login
router.post("/signin", async(req, res) => {
    
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    try {
        const user = await User.findOne({email: userEmail})
        if(!user) {
            return res.status(400).json({msg: "Invalid Credentials"})
        }

        const isPasswordCorrect = bcrypt.compareSync(userPassword, user.password)
        if(!isPasswordCorrect) {
            return res.status(400).json({msg: "Invalid Credentials"})
        } 

        const  { password,...others } = user._doc;
        return res.status(200).json({...others})
    } catch (error) {
        res.status(400).json({msg: "Error while logging in. please try again"})
    }
})

export default router;