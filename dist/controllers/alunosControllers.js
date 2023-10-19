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
        const id = req.params.id;
        try {
            const alunoBuscado = await alunosServices_1.default.readAluno(id);
            return res.status(200).json({ aluno: alunoBuscado });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async criarAluno(req, res) {
        try {
            const { id, nome, curso, email, matricula } = req.body;
            const criaAluno = await alunosServices_1.default.createAluno({ id, nome, curso, email, matricula });
            return res.status(200).json({
                status: 'ok',
                criaAluno,
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async atualizarAluno(req, res) {
        try {
            const id = req.params.id;
            const { nome, curso, email, matricula } = req.body;
            const atualizaAluno = await alunosServices_1.default.updateAluno(id, { nome, curso, email, matricula });
            return res.status(200).json({
                status: 'ok',
                atualizaAluno,
                message: 'Aluno atualizado com sucesso!!'
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async deletaAluno(req, res) {
        try {
            const id = req.params.id;
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
