# This the new ts rest library which is similar to trpc 

### This is getting so much amazing its amazing with express nestjs nextjs 

### Lets build the full working api real quick with express


`
Below is the basic step by step guide to setup ts-rest
`


```bash

  pnpm add @ts-rest/core
  pnpm @ts-rest/express 
  pnpm add prisma 
  pnpm add @ts-rest/open-api
  pnpm add swagger-ui-express

```

```bash
 pnpm dev

```


# * A Basic Working setup something look like this

```ts
// main.ts

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { contract } from "./contract";
const app = express();
import { PrismaClient } from "@prisma/client";
import { generateOpenApi } from "@ts-rest/open-api";
const prisma = new PrismaClient();
import * as swaggerUi from "swagger-ui-express";

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



```

*  Remember you need to generate contract what the heck is contract ? think it as a schema 


<!-- How to declare disclaimer in markdown in yellow -->

> Disclaimer : This is not the api project rather just the overall demonstration of the ts-rest library and i have used prisma and drizzle both for the database and the api generation in your case you don't need to use both of them you can use any one of them or you can use any other database or api generation library