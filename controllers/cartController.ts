import { Request, Response } from 'express';
import CartModel from '../models/cartModel';

const cart = new CartModel();

export const addToCart = async (req: Request, res: Response) => {
    const { product, quantity } = req.body;
    try {
        console.log(product,quantity) ;
        await cart.addProduct(product, quantity);
        res.json(cart.getCartState());
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getCartState = (req: Request, res: Response) => {
    res.json(cart.getCartState());
};