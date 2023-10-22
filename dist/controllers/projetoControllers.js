"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projetoServices_1 = __importDefault(require("../services/projetoServices"));
class ProjetoController {
    constructor() { }
    async listarProjetos(req, res) {
        try {
            const listaProjetos = await projetoServices_1.default.readAllProjetos();
            return res.status(200).json({
                status: 'ok',
                projetos: listaProjetos,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async buscarProjeto(req, res) {
        const id = parseInt(req.params.id);
        try {
            const projetoBuscado = await projetoServices_1.default.readProjeto(id);
            return res.status(200).json({ projeto: projetoBuscado });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async criarProjeto(req, res) {
        const { id, tema, estande, grupo_id, data_apresentacao, avaliacao_id } = req.body;
        try {
            const criaProjeto = await projetoServices_1.default.createProjeto({
                id,
                tema,
                estande,
                grupo_id,
                data_apresentacao,
                avaliacao_id,
            });
            return res.status(200).json({
                status: 'ok',
                projeto: criaProjeto,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async atualizarProjeto(req, res) {
        const id = parseInt(req.params.id);
        const { tema, estande, grupo_id, data_apresentacao, avaliacao_id } = req.body;
        try {
            const atualizaProjeto = await projetoServices_1.default.updateProjeto(id, {
                tema,
                estande,
                grupo_id,
                data_apresentacao,
                avaliacao_id,
            });
            return res.status(200).json({
                status: 'ok',
                projeto: atualizaProjeto,
                message: 'Projeto atualizado com sucesso!',
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async deletarProjeto(req, res) {
        const id = parseInt(req.params.id);
        try {
            const projetoDeletado = await projetoServices_1.default.deleteProjeto(id);
            return res.status(200).json({
                status: 'ok',
                projeto: projetoDeletado,
                message: 'Projeto deletado com sucesso!',
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new ProjetoController();
