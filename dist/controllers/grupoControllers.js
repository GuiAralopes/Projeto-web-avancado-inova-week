"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grupoServices_1 = __importDefault(require("../services/grupoServices"));
class grupoControllers {
    constructor() { }
    async listarGrupo(req, res) {
        try {
            const listaGrupo = await grupoServices_1.default.readAllGrupo();
            return res.status(200).json({
                status: 'ok',
                grupo: listaGrupo
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async buscaGrupo(req, res) {
        const id = parseInt(req.params.id);
        try {
            const grupoBuscado = await grupoServices_1.default.readGrupo(id);
            return res.status(200).json({ grupo: grupoBuscado });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async criarGrupo(req, res) {
        try {
            const { id, nome_projeto } = req.body;
            const criaGrupo = await grupoServices_1.default.createGrupo({ id, nome_projeto });
            return res.status(200).json({
                status: 'ok',
                criaGrupo,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async atualizarGrupo(req, res) {
        const id = parseInt(req.params.id);
        const { nome_projeto } = req.body;
        try {
            const atualizaGrupo = await grupoServices_1.default.updateGrupo(id, { nome_projeto });
            return res.status(200).json({
                status: 'ok',
                atualizaGrupo,
                message: 'Grupo alterado'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async deletaGrupo(req, res) {
        const id = parseInt(req.params.id);
        try {
            const grupoDeletado = await grupoServices_1.default.deleteGrupo(id);
            return res.status(200).json({
                status: 'ok',
                grupoDeletado,
                message: 'Grupo deletado'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new grupoControllers();
