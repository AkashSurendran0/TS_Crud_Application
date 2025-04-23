import { Request, Response } from "express";
import user from "../models/userModel";
import mongoose from "mongoose";

export default class modifyStudent{

    loadPanel = async (req:Request, res:Response)=>{
        const users=await user.find()
        res.render('adminPanel', {
            users:users
        })
    }
    
    addUser = async (req:Request, res:Response)=>{
        const {name, email, age}=req.body
        const data={
            name:name,
            email:email,
            age:age
        }
        await user.insertOne(data)
        res.redirect('/')
    }
    
    editUser = async (req:Request, res:Response)=>{
        const {name, email, age}=req.body
        const id=req.params.id
        await user.findByIdAndUpdate(
            id, 
            {
                name, 
                email,
                age
            }
        )
        res.redirect('/')
    }
    
    deleteUser = async (req:Request, res:Response)=>{
        const id=req.params.id
        await user.findByIdAndDelete(id)
        res.redirect('/')
    }
    
}