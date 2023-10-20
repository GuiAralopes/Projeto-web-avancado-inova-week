"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const professorServices_1 = __importDefault(require("../services/professorServices"));
class professorControllers {
    constructor() { }
    async listarProfessores(req, res) {
        try {
            const listaProfessores = await professorServices_1.default.readAllProfessor();
            return res.status(200).json({
                status: 'ok',
                professores: listaProfessores,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async buscaProfessor(req, res) {
        const id = parseInt(req.params.id);
        try {
            const professorBuscado = await professorServices_1.default.readProfessor(2);
            return res.status(200).json({ professor: professorBuscado });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async criarProfessor(req, res) {
        const { id, nome, matricula, email } = req.body;
        try {
            const criaProf = await professorServices_1.default.createProf({
                id,
                nome,
                matricula,
                email,
            });
            return res.status(200).json({
                status: "ok",
                criaProf,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async atualizarProfessor(req, res) {
        const id = parseInt(req.params.id);
        const { nome, matricula, email } = req.body;
        try {
            const atualizaProf = await professorServices_1.default.updateProf(id, {
                nome,
                matricula,
                email,
            });
            return res.status(200).json({
                status: 'ok',
                atualizaProf,
                message: 'Professor atualizado com sucesso!!',
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async deletarProfessor(req, res) {
        const id = parseInt(req.params.id);
        try {
            const professorDeletado = await professorServices_1.default.deleteProf(id);
            return res.status(200).json({
                status: 'ok',
                professorDeletado,
                message: 'Professor deletado com sucesso'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new professorControllers();
