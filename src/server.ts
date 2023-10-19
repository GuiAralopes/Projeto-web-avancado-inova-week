import express from 'express'
import {Router, Response, Request} from 'express'
import alunoRouter from './routes/alunosRouter'


const app = express()
const route = Router()
const port = 3000

app.use("/api", alunoRouter)

// const listaAlunos = alunosServices.readAllAlunos();



// const listaAlunos = {
//     id:15,
//     nome: "André"
// }


// route.get('/', (req:Request, res:Response)=>{
//     res.json({data: listaAlunos})
// })

// app.use(route)

app.listen(port, ()=>{console.log(`Server running on http://localhost:${port}`)})

