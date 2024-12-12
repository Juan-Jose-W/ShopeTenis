import { Request, Response } from 'express';
import Recipe from '../models/Tenis';
import Tenis from '../models/Tenis';

export const getAllTenis = async (req: Request, res: Response): Promise<void> => {
  try {
    const tenis = await Tenis.find();
    res.status(200).json(tenis); 
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const addTenis = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    const newTenis = new Tenis(req.body);
    await newTenis.save();
    res.status(201).json(newTenis); 
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getTenisById = async (req: Request, res: Response): Promise<void> => {
  try {
    const tenis = await Tenis.findById(req.params.id);
    if (!tenis) {
      res.status(404).json({ message: 'Recipe not found' });
    } else {
      res.status(200).json(tenis);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};
