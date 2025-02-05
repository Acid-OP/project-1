import express from "express";
import { JWT_SECRET } from "./config";
import Jwt from "jsonwebtoken";
import cors from "cors";
import { ClientModel } from "./db";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/api/v1/signup" , async(req,res)=>{
    const email = req.body.username;
    const password = req.body.password;
    try{
        await ClientModel.create({
            email: email,
            password : password
        })
        res.json({
            message: "user signed up"
        })
    } catch(e) {
        res.status(409).json({message : "user already exists"});
    }
});

app.post("api/v1/signin" , async(req,res) => {
    const email = req.body.username;
    const password = req.body.password;

    const existingUser = await ClientModel.findOne({email , password});
    if(existingUser){
        const token = Jwt.sign({id:existingUser._id},JWT_SECRET);
        res.json({token});
    } else{
        res.status(403).send({message : "Incorrect Credentials"});
    }
});
