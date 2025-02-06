"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const priceService_1 = require("../services/priceService");
class CartModel {
    constructor() {
        this.cart = [];
    }
    addProduct(product, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const price = yield (0, priceService_1.getProductPrice)(product);
            this.cart.push({ product, quantity, price });
        });
    }
    getCartState() {
        const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = subtotal * 0.125;
        const total = subtotal + tax;
        return { cart: this.cart, subtotal, tax, total };
    }
}
exports.default = CartModel;
