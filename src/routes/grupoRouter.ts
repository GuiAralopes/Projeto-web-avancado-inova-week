import {Router} from 'express'
import grupoControllers from '../controllers/grupoControllers'

const grupoRouter = Router()

grupoRouter.get("/grupo", grupoControllers.listarGrupo);
grupoRouter.get("/grupo/:id", grupoControllers.buscaGrupo);
grupoRouter.post("/grupo/", grupoControllers.criarGrupo);
grupoRouter.put("/grupo/:id", grupoControllers.atualizarGrupo);
grupoRouter.delete("/grupo/:id", grupoControllers.deletaGrupo);

export default grupoRouter;