import { Router } from  'express'
import professorControllers from '../controllers/professorControllers'

const professorRouter = Router()

    professorRouter.get("/professores", professorControllers.listarProfessores);
    professorRouter.get("professor", professorControllers.buscaProfessor);
    professorRouter.post("/professor/post", professorControllers.criarProfessor);
    professorRouter.put("/:id", professorControllers.atualizarProfessor);
    professorRouter.delete("professor/delete/:id", professorControllers.deletarProfessor);

export default professorRouter