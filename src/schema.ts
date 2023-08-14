import { pgTable, serial, text, varchar, uuid } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom(),
  name: text("full_name"),
});

export type Users = InferModel<typeof users, "select">;
