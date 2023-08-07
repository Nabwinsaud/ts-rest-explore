import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  driver: "pg",
  out: "./drizzle/migrations",
  dbCredentials: {
    connectionString: "postgres://nabin:root@localhost:5432/mad",
  },
} satisfies Config;
