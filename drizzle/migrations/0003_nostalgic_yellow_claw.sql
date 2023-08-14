ALTER TABLE "users" ADD COLUMN "id" uuid DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "id::uuid";