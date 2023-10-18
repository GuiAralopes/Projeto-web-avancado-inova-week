import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function mainTest(){
    const showAll = await prisma.aluno.findMany();
    // console.log(showAll)
    console.log(showAll);
}


mainTest()
.then(async ()=>{await prisma.$disconnect()})
.catch(async (e)=>{
    console.error(e) 
    await prisma.$disconnect()
    process.exit(1)
})
.finally(()=>{console.log("Teste Feito!")})