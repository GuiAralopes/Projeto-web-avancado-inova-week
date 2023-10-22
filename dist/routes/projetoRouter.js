"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projetoControllers_1 = __importDefault(require("../controllers/projetoControllers"));
const projetoRouter = (0, express_1.Router)();
projetoRouter.get("/projetos", projetoControllers_1.default.listarProjetos);
projetoRouter.get("/projeto/:id", projetoControllers_1.default.buscarProjeto);
projetoRouter.post("/projeto", projetoControllers_1.default.criarProjeto);
projetoRouter.put("/projeto/update/:id", projetoControllers_1.default.atualizarProjeto);
projetoRouter.delete("/projeto/delete/:id", projetoControllers_1.default.deletarProjeto);
exports.default = projetoRouter;
