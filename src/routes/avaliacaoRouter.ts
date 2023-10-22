import {Router} from 'express'
import avaliacaoControllers from '../controllers/avaliacaoControllers'

const avaliacaoRouter = Router()

avaliacaoRouter.get("/avaliacao", avaliacaoControllers.listarAvaliacao);
avaliacaoRouter.get("/avaliacao/:id", avaliacaoControllers.buscaAvaliacao);
avaliacaoRouter.post("/avaliacao/", avaliacaoControllers.criarAvaliacao);
avaliacaoRouter.put("/avaliacao/:id", avaliacaoControllers.atualizarAvaliacao);
avaliacaoRouter.delete("/avaliacao/:id", avaliacaoControllers.deletaAvaliacao);

export default avaliacaoRouter;