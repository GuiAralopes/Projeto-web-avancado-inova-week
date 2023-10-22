import express from 'express'
import {Router, Response, Request} from 'express'
import alunoRouter from './routes/alunosRouter'
import professorRouter from './routes/professorRouter'
import projetoRouter from './routes/projetoRouter'
import avaliacaoRouter from './routes/avaliacaoRouter'
import grupoRouter from './routes/grupoRouter'

const app = express()
// const route = Router()
const port = 3000

app.use(express.json());

app.use("/api", alunoRouter)
app.use("/api", professorRouter)
app.use("/api", projetoRouter)
app.use("/api", avaliacaoRouter)
app.use("/api", grupoRouter)

app.use(express.static('public'));

app.listen(port, ()=>{console.log(`Server running on http://localhost:${port}/api`)})

