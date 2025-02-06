import fs from 'fs/promises';
import path from 'path';

const DB_FILE_PATH = path.join(__dirname, '../db.json');

interface Product {
    id: string;
    title: string;
    price: number;
}

interface Database {
    products: Product[];
}

export const getProductPrice = async (productId: string): Promise<number> => {
    try {
        // Read and parse db.json
        const data = await fs.readFile(DB_FILE_PATH, 'utf-8');
        const db: Database = JSON.parse(data);

        // Find the product by ID
        const product = db.products.find(p => p.id === productId);

        if (!product) {
            throw new Error(`Product '${productId}' not found`);
        }

        return product.price;
    } catch (error) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        throw new Error(errorMessage);
    }
};
