import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";
const client = new Client({
  connectionString: "postgres://nabin:root@localhost:5432/mad",
});

client.connect();
export const db = drizzle(client, { schema });
