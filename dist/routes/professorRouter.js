"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professorControllers_1 = __importDefault(require("../controllers/professorControllers"));
const professorRouter = (0, express_1.Router)();
professorRouter.get("/professores", professorControllers_1.default.listarProfessores);
professorRouter.get("professor", professorControllers_1.default.buscaProfessor);
professorRouter.post("/professor/post", professorControllers_1.default.criarProfessor);
professorRouter.put("professor/update/:id", professorControllers_1.default.atualizarProfessor);
professorRouter.delete("professor/delete/:id", professorControllers_1.default.deletarProfessor);
exports.default = professorRouter;
