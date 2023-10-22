"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avaliacaoServices_1 = __importDefault(require("../services/avaliacaoServices"));
class avaliacaoControllers {
    constructor() { }
    async listarAvaliacao(req, res) {
        try {
            const listaAvaliacao = await avaliacaoServices_1.default.readAllAvaliacao();
            return res.status(200).json({
                status: 'ok',
                avaliacao: listaAvaliacao
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async buscaAvaliacao(req, res) {
        const id = parseInt(req.params.id);
        try {
            const avaliacaoBuscada = await avaliacaoServices_1.default.readAvaliacao(id);
            return res.status(200).json({ avaliacao: avaliacaoBuscada });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async criarAvaliacao(req, res) {
        try {
            const { id, nota_avaliacao, professor_id } = req.body;
            const criaAvaliacao = await avaliacaoServices_1.default.createAvaliacao({ id, nota_avaliacao, professor_id });
            return res.status(200).json({
                status: 'ok',
                criaAvaliacao,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async atualizarAvaliacao(req, res) {
        const id = parseInt(req.params.id);
        const { nota_avaliacao, professor_id } = req.body;
        try {
            const atualizaAvaliacao = await avaliacaoServices_1.default.updateAvaliacao(id, { nota_avaliacao, professor_id });
            return res.status(200).json({
                status: 'ok',
                atualizaAvaliacao,
                message: 'Avaliacao alterada!!'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async deletaAvaliacao(req, res) {
        const id = parseInt(req.params.id);
        try {
            const avaliacaoDeletada = await avaliacaoServices_1.default.deleteAvaliacao(id);
            return res.status(200).json({
                status: 'ok',
                avaliacaoDeletada,
                message: 'Avaliacao deletada'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new avaliacaoControllers();
