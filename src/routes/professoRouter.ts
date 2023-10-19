import { Router } from "express";
import professorControllers from "../controllers/professorControllers";

const professorRouter = Router()

    professorRouter.get('/', professorControllers.listarProfessores);
    professorRouter.get('/:id', professorControllers.buscaProfessor);
    professorRouter.post('/', professorControllers.criarProfessor);
    professorRouter.put('/:id', professorControllers.atualizarProfessor);
    professorRouter.delete('/:id', professorControllers.deletarProfessor);

export default professorRouter;