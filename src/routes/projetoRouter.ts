import { Router } from 'express';
import ProjetoController from '../controllers/projetoControllers';

const projetoRouter = Router();

projetoRouter.get("/projetos", ProjetoController.listarProjetos);
projetoRouter.get("/projeto/:id", ProjetoController.buscarProjeto);
projetoRouter.post("/projeto", ProjetoController.criarProjeto);
projetoRouter.put("/projeto/update/:id", ProjetoController.atualizarProjeto);
projetoRouter.delete("/projeto/delete/:id", ProjetoController.deletarProjeto);

export default projetoRouter;
