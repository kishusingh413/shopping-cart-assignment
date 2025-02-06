import { getProductPrice } from '../services/priceService';

interface CartItem {
    product: string;
    quantity: number;
    price: number;
}

export default class CartModel {
    private cart: CartItem[] = [];

    async addProduct(product: string, quantity: number) {
        const price = await getProductPrice(product);
        this.cart.push({ product, quantity, price });
    }

    getCartState() {
        const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = subtotal * 0.125;
        const total = subtotal + tax;
        return { cart: this.cart, subtotal, tax, total };
    }
}
