import { Request, Response } from "express";
import User from "../models/User";

export const registrerUser = async (req: Request, res:Response): Promise<void> =>{
    try{
        const {username,email,password} = req.body;
        const existingUser = await User.findOne({email});
        if (existingUser){
            res.status(400).json({message:"Usuario ya Existe"});
            return;
        }
        
        const newUser = new User ({username,email,password});
        await newUser.save();
        res.status(201).json({message:"Usuario registrtado con exito", user: newUser});
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({message: errorMessage});
    };
}

export const getAllUser = async (req:Request, res:Response): Promise <void> =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({message: errorMessage});
    }
};

export const getUserByid = async (req:Request, res:Response): Promise <void> =>{
    try{
        const user = await User.findById(req.params.id);
        if (!user){
            res.status(404).json({message: "Usuario no encontrado"});
            return;
        }
        res.status(200).json(User);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error:errorMessage})
    }
};