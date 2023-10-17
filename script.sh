npm init  -y

# touch index.js

npm install typescript ts-node @types/node --save-dev

npx tsc --init

npm install --save @types/express

npm i dotenv

npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init

mkdir src

mkdir src/controllers

mkdir src/routes

mkdir src/services

code .

