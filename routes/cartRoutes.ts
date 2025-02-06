import express from 'express';
import { addToCart, getCartState } from '../controllers/cartController';

const router = express.Router();

router.post('/add', addToCart);
router.get('/state', getCartState);

export default router;