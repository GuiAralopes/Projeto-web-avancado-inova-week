import express from 'express'
import {Router, Response, Request} from 'express'
import alunoRouter from './routes/alunosRouter'

const app = express()
// const route = Router()
const port = 3000

app.use(express.json());

app.use("/api", alunoRouter)

app.use(express.static('public'));

app.listen(port, ()=>{console.log(`Server running on http://localhost:${port}/api`)})

