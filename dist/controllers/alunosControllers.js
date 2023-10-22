"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alunosServices_1 = __importDefault(require("../services/alunosServices"));
class alunosControllers {
    constructor() { }
    async listarAlunos(req, res) {
        try {
            const listaAlunos = await alunosServices_1.default.readAllAlunos();
            return res.status(200).json({
                status: 'ok',
                alunos: listaAlunos
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async buscaAluno(req, res) {
        const id = parseInt(req.params.id);
        try {
            const alunoBuscado = await alunosServices_1.default.readAluno(id);
            return res.status(200).json({ aluno: alunoBuscado });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async criarAluno(req, res) {
        const { id, nome, curso, email, matricula, grupo_id } = req.body;
        try {
            const criaAluno = await alunosServices_1.default.createAluno({ id, nome, curso, email, matricula, grupo_id });
            return res.status(201).json({
                status: 'ok',
                criaAluno,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async atualizarAluno(req, res) {
        const id = parseInt(req.params.id);
        const { nome, curso, email, matricula, grupo_id } = req.body;
        try {
            const atualizaAluno = await alunosServices_1.default.updateAluno(id, { nome, curso, email, matricula, grupo_id });
            return res.json(atualizaAluno);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    async deletaAluno(req, res) {
        try {
            const id = parseInt(req.params.id);
            const alunoDeletado = await alunosServices_1.default.deleteAlunos(id);
            return res.status(200).json({
                status: 'ok',
                alunoDeletado,
                message: 'Aluno deletado com sucesso'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new alunosControllers();
