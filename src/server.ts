//* loving the drizzle orm too both prisma and drizzle are awesome
// main.ts
//* drizzle performance is better than prisma
//* prisma is more mature than drizzle
//* prisma have more features than drizzle
import express, { type Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { contract } from "./contract/contract";
const app = express();
import { PrismaClient } from "@prisma/client";
import { generateOpenApi } from "@ts-rest/open-api";
const prisma = new PrismaClient();
import * as swaggerUi from "swagger-ui-express";
import { db } from ".";
import { users } from "./schema";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const s = initServer();

const router = s.router(contract, {
  getPost: async ({ params: { id } }) => {
    const post = await prisma.post.findUnique({ where: { id } });

    return {
      status: 200,
      body: post,
    };
  },
  createPost: async ({ body }) => {
    const post = await prisma.post.create({
      data: body,
    });

    return {
      status: 201,
      body: post,
    };
  },
  getPosts: async () => {
    const posts = await prisma.post.findMany();
    return {
      status: 200,
      body: posts,
    };
  },
  addDrizzle: async ({ body }) => {
    const user = await db.insert(users).values(body).returning();
    return {
      status: 200,
      body: user,
    };
  },

  getDrizzle: async () => {
    const users = await db.query.users.findMany();
    return {
      status: 200,
      body: users,
    };
  },
});

createExpressEndpoints(contract, router, app);

const openApiDocument = generateOpenApi(contract, {
  info: {
    title: "Welcome to the post api using ts reset API",
    version: "1.0.0",
  },
});

app.use("/", swaggerUi.serve, swaggerUi.setup(openApiDocument));

const port = process.env.port || 3333;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
