"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alunosServices_1 = __importDefault(require("../services/alunosServices"));
class alunosControllers {
    constructor() { }
    async listarAlunos(req, res) {
        const listaAlunos = await alunosServices_1.default.readAllAlunos();
    }
}
