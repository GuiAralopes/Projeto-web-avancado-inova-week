"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avaliacaoControllers_1 = __importDefault(require("../controllers/avaliacaoControllers"));
const avaliacaoRouter = (0, express_1.Router)();
avaliacaoRouter.get("/avaliacao", avaliacaoControllers_1.default.listarAvaliacao);
avaliacaoRouter.get("/avaliacao/:id", avaliacaoControllers_1.default.buscaAvaliacao);
avaliacaoRouter.post("/avaliacao/", avaliacaoControllers_1.default.criarAvaliacao);
avaliacaoRouter.put("/avaliacao/:id", avaliacaoControllers_1.default.atualizarAvaliacao);
avaliacaoRouter.delete("/avaliacao/:id", avaliacaoControllers_1.default.deletaAvaliacao);
exports.default = avaliacaoRouter;
