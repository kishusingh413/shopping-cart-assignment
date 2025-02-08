"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/cart', cartRoutes_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Shopping Cart API running on http://localhost:${PORT}`);
});
