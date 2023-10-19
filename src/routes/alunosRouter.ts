import {Router} from 'express'
import alunosControllers from '../controllers/alunosControllers'

const alunoRouter = Router()

alunoRouter.get("/alunos", alunosControllers.listarAlunos)
alunoRouter.get("/aluno/:id", alunosControllers.buscaAluno)
alunoRouter.post("/aluno/post", alunosControllers.criarAluno)
alunoRouter.delete("aluno/delete/:id", alunosControllers.atualizarAluno)


export default alunoRouter