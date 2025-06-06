import { AppDataSource } from "./database/data-source"

AppDataSource.initialize().then(async () => {

console.log("Base de dados carregada com sucesso!")
   
}).catch(error => console.log(error))
