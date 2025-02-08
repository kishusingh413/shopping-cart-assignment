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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartState = exports.addToCart = void 0;
const cartModel_1 = __importDefault(require("../models/cartModel"));
const cart = new cartModel_1.default();
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product, quantity } = req.body;
    // console.log(req);
    try {
        console.log(product, quantity);
        yield cart.addProduct(product, quantity);
        res.json(cart.getCartState());
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});
exports.addToCart = addToCart;
const getCartState = (req, res) => {
    // console.log(req);
    res.json(cart.getCartState());
};
exports.getCartState = getCartState;
