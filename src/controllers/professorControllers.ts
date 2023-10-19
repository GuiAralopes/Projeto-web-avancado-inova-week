import professorServices from "../services/professorServices";
import { Request, Response } from "express";

class professorControllers {
  constructor() {}

  async listarProfessores(req: Request, res: Response) {
    try {
      const listaProfessores = await professorServices.readAllProfessor();
      return res.status(200).json({
        status: "ok",
        alunos: listaProfessores,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async buscaProfessor(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const professorBuscado = await professorServices.readProfessor(id);
      return res.status(200).json({ professor: professorBuscado });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async criarProfessor(req: Request, res: Response) {
    try {
      const { id, nome, matricula, email } = req.body;
      const criaProf = await professorServices.createProf({
        id,
        nome,
        matricula,
        email,
      });
      return res.status(200).json({
        status: "ok",
        criaProf,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async atualizarProfessor(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { nome, matricula, email } = req.body;
      const atualizaProf = await professorServices.updateProf(id, {
        nome,
        matricula,
        email,
      });
      return res.status(200).json({
        status: "ok",
        atualizaProf,
        message: "Professor atualizado com sucesso!!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deletarProfessor(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const professorDeletado = await professorServices.deleteProf(id);
      return res.status(200).json({
        status: "ok",
        professorDeletado,
        message: "Professor deletado com sucesso",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new professorControllers();
