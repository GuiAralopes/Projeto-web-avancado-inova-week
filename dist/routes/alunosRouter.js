"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alunosControllers_1 = __importDefault(require("../controllers/alunosControllers"));
const alunoRouter = (0, express_1.Router)();
alunoRouter.get("/alunos", alunosControllers_1.default.listarAlunos);
alunoRouter.get("/aluno/:id", alunosControllers_1.default.buscaAluno);
alunoRouter.post("/aluno/post", alunosControllers_1.default.criarAluno);
alunoRouter.delete("aluno/delete/:id", alunosControllers_1.default.deletaAluno);
alunoRouter.put("aluno/update/:id", alunosControllers_1.default.atualizarAluno);
exports.default = alunoRouter;
