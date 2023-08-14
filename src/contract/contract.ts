import { Post } from "@prisma/client";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { Users } from "../schema";

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

const drizzleSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
});
export const contract = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: "Create a post",
  },
  getPost: {
    method: "GET",
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: "Get a post by id",
  },
  getPosts: {
    method: "GET",
    path: "/posts",
    responses: {
      200: c.type<Post[]>(),
    },
    summary: "Get all posts",
  },
  addDrizzle: {
    method: "POST",
    path: "/drizzle",
    body: drizzleSchema,
    summary: "Add drizzle",
    responses: {
      200: c.type<Users[]>(),
    },
  },
  getDrizzle: {
    method: "GET",
    path: "/drizzle",
    summary: "Get drizzle",
    responses: {
      200: c.type<Users[]>(),
    },
  },
});
