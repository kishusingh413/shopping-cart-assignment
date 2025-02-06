import express from 'express';
import cartRoutes from './routes/cartRoutes';

const app = express();
app.use(express.json());

app.use('/cart', cartRoutes);

const PORT: number = 3001;
app.listen(PORT, () => {
    console.log(`Shopping Cart API running on http://localhost:${PORT}`);
});
