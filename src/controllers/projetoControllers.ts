import ProjetoService from '../services/projetoServices';
import { Request, Response } from 'express';

class ProjetoController {
  constructor() {}

  async listarProjetos(req: Request, res: Response) {
    try {
      const listaProjetos = await ProjetoService.readAllProjetos();
      return res.status(200).json({
        status: 'ok',
        projetos: listaProjetos,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async buscarProjeto(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const projetoBuscado = await ProjetoService.readProjeto(id);
      return res.status(200).json({ projeto: projetoBuscado });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async criarProjeto(req: Request, res: Response) {
    const {id, tema, estande, grupo_id, data_apresentacao, avaliacao_id } = req.body;
    try {
      const criaProjeto = await ProjetoService.createProjeto({
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
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async atualizarProjeto(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { tema, estande, grupo_id, data_apresentacao, avaliacao_id } = req.body;
    try {
      const atualizaProjeto = await ProjetoService.updateProjeto(id, {
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
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deletarProjeto(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const projetoDeletado = await ProjetoService.deleteProjeto(id);
      return res.status(200).json({
        status: 'ok',
        projeto: projetoDeletado,
        message: 'Projeto deletado com sucesso!',
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ProjetoController();
