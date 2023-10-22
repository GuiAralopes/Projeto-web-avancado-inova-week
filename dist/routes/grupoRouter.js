"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupoControllers_1 = __importDefault(require("../controllers/grupoControllers"));
const grupoRouter = (0, express_1.Router)();
grupoRouter.get("/grupo", grupoControllers_1.default.listarGrupo);
grupoRouter.get("/grupo/:id", grupoControllers_1.default.buscaGrupo);
grupoRouter.post("/grupo/", grupoControllers_1.default.criarGrupo);
grupoRouter.put("/grupo/:id", grupoControllers_1.default.atualizarGrupo);
grupoRouter.delete("/grupo/:id", grupoControllers_1.default.deletaGrupo);
exports.default = grupoRouter;
