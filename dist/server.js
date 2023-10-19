"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alunosRouter_1 = __importDefault(require("./routes/alunosRouter"));
const app = (0, express_1.default)();
// const route = Router()
const port = 3000;
// app.use(express.json());
app.use("/api", alunosRouter_1.default);
// app.use(express.static('public'));
app.listen(port, () => { console.log(`Server running on http://localhost:${port}/api`); });
