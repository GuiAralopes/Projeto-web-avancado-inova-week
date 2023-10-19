import {Router} from 'express'
import alunosControllers from '../controllers/alunosControllers'

const alunoRouter = Router()

alunoRouter.get("/alunos", alunosControllers.listarAlunos)

export default alunoRouter