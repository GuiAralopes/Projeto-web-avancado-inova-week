import express from 'express'
import {Router, Response, Request} from 'express'
import alunoRouter from './routes/alunosRouter'

const app = express()
// const route = Router()
const port = 3000

app.use("/api", alunoRouter)

app.listen(port, ()=>{console.log(`Server running on http://localhost:${port}`)})

