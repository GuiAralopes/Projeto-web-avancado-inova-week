import {Router} from 'express'
import integrantes_grupoControllers from '../controllers/integrantes_grupoControllers'

const integrantes_grupoRouter = Router()

integrantes_grupoRouter.get("/integrantes_grupo", integrantes_grupoControllers.listarIntegrantes_grupo);
integrantes_grupoRouter.get("/integrantes_grupo/:id", integrantes_grupoControllers.buscaIntegrantes_grupo);
integrantes_grupoRouter.post("/integrantes_grupo/", integrantes_grupoControllers.criarIntegrantes_grupo);
integrantes_grupoRouter.put("/integrantes_grupo/:id", integrantes_grupoControllers.atualizarIntegrantes_grupo);
integrantes_grupoRouter.delete("/integrantes_grupo/:id", integrantes_grupoControllers.deletaIntegrantes_grupo);

export default integrantes_grupoRouter;