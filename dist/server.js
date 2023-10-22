"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alunosRouter_1 = __importDefault(require("./routes/alunosRouter"));
const professorRouter_1 = __importDefault(require("./routes/professorRouter"));
const projetoRouter_1 = __importDefault(require("./routes/projetoRouter"));
const avaliacaoRouter_1 = __importDefault(require("./routes/avaliacaoRouter"));
const grupoRouter_1 = __importDefault(require("./routes/grupoRouter"));
const app = (0, express_1.default)();
// const route = Router()
const port = 3000;
app.use(express_1.default.json());
app.use("/api", alunosRouter_1.default);
app.use("/api", professorRouter_1.default);
app.use("/api", projetoRouter_1.default);
app.use("/api", avaliacaoRouter_1.default);
app.use("/api", grupoRouter_1.default);
app.use(express_1.default.static('public'));
app.listen(port, () => { console.log(`Server running on http://localhost:${port}/api`); });
