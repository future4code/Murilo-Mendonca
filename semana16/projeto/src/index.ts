import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// Endpoint Criar Usuario

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {

   try {
      await connection
         .insert({
            id: Date.now(),
            name,
            nickname,
            email
         })
         .into("ListUser");
   } catch (error) {
      console.log(error)
   }
}

// Exercício 01

app.post("/user", async (req: Request, res: Response) => {

   try {
      const keys = Object.keys(req.body)

      for (const key of keys) {
         if (req.body[key] == "")
            return res.status(400).send({ message: "Dados inválidos, tente novamente." })
      }

      const { name, nickname, email } = req.body

      await createUser(name, nickname, email);
      res.status(200).send("Usuário criado com sucesso.")
   } catch (error) {
      res.status(400).send(error)
   }

})

// Exercício 02

const getUserById = async (
   id: string
): Promise<any> => {
   try {
      const user = await connection
         .select('id', 'nickname')
         .from('ListUser')
         .where({ id });

      return user[0];
      console.log(user[0])

   } catch (error) {
      console.log(error);
   }
};


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
