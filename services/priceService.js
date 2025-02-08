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
exports.getProductPrice = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const DB_FILE_PATH = path_1.default.join(__dirname, '../db.json');
const getProductPrice = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Read and parse db.json
        const data = yield promises_1.default.readFile(DB_FILE_PATH, 'utf-8');
        const db = JSON.parse(data);
        // Find the product by ID
        const product = db.products.find(p => p.id === productId);
        if (!product) {
            throw new Error(`Product '${productId}' not found`);
        }
        return product.price;
    }
    catch (error) {
        let errorMessage = "An unknown error occurred";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        throw new Error(errorMessage);
    }
});
exports.getProductPrice = getProductPrice;
