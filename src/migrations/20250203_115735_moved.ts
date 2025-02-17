import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_images_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_images_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_partnerships_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_images_block_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_images_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_partnerships_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_timeline_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"is_disabled" boolean DEFAULT false NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "navigation_blocks_button" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "navigation_blocks_button" CASCADE;
  DROP INDEX IF EXISTS "videos_filename_idx";
  ALTER TABLE "images" ADD COLUMN "prefix" varchar DEFAULT 'images';
  ALTER TABLE "pages_blocks_panels_panels" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_panels_panels" ADD COLUMN "next_to_title" varchar;
  ALTER TABLE "pages_blocks_panels_panels" ADD COLUMN "byline" varchar;
  ALTER TABLE "videos" ADD COLUMN "slug" varchar NOT NULL;
  ALTER TABLE "videos" ADD COLUMN "slug_lock" boolean DEFAULT true;
  ALTER TABLE "videos" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "videos" ADD COLUMN "mux_playback_id" varchar NOT NULL;
  ALTER TABLE "videos" ADD COLUMN "is_featured" boolean DEFAULT true NOT NULL;
  ALTER TABLE "home_page_blocks_panels_panels" ADD COLUMN "title" varchar;
  ALTER TABLE "home_page_blocks_panels_panels" ADD COLUMN "next_to_title" varchar;
  ALTER TABLE "home_page_blocks_panels_panels" ADD COLUMN "byline" varchar;
  ALTER TABLE "navigation_blocks_dropdown_links" ADD COLUMN "description" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "navigation_blocks_dropdown_links" ADD COLUMN "is_disabled" boolean DEFAULT false NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact_form" ADD CONSTRAINT "pages_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_block_images" ADD CONSTRAINT "pages_blocks_images_block_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_block_images" ADD CONSTRAINT "pages_blocks_images_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_images_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_block" ADD CONSTRAINT "pages_blocks_images_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_partnerships_form" ADD CONSTRAINT "pages_blocks_partnerships_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_timeline_milestones" ADD CONSTRAINT "pages_blocks_timeline_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_contact_form" ADD CONSTRAINT "home_page_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_images_block_images" ADD CONSTRAINT "home_page_blocks_images_block_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_images_block_images" ADD CONSTRAINT "home_page_blocks_images_block_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_images_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_images_block" ADD CONSTRAINT "home_page_blocks_images_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_partnerships_form" ADD CONSTRAINT "home_page_blocks_partnerships_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_timeline_milestones" ADD CONSTRAINT "home_page_blocks_timeline_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_timeline" ADD CONSTRAINT "home_page_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_blocks_link" ADD CONSTRAINT "navigation_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_form_order_idx" ON "pages_blocks_contact_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_form_parent_id_idx" ON "pages_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_form_path_idx" ON "pages_blocks_contact_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_block_images_order_idx" ON "pages_blocks_images_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_block_images_parent_id_idx" ON "pages_blocks_images_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_block_images_image_idx" ON "pages_blocks_images_block_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_block_order_idx" ON "pages_blocks_images_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_block_parent_id_idx" ON "pages_blocks_images_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_block_path_idx" ON "pages_blocks_images_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partnerships_form_order_idx" ON "pages_blocks_partnerships_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partnerships_form_parent_id_idx" ON "pages_blocks_partnerships_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partnerships_form_path_idx" ON "pages_blocks_partnerships_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_milestones_order_idx" ON "pages_blocks_timeline_milestones" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_milestones_parent_id_idx" ON "pages_blocks_timeline_milestones" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_contact_form_order_idx" ON "home_page_blocks_contact_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_contact_form_parent_id_idx" ON "home_page_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_contact_form_path_idx" ON "home_page_blocks_contact_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_images_order_idx" ON "home_page_blocks_images_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_images_parent_id_idx" ON "home_page_blocks_images_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_images_image_idx" ON "home_page_blocks_images_block_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_order_idx" ON "home_page_blocks_images_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_parent_id_idx" ON "home_page_blocks_images_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_path_idx" ON "home_page_blocks_images_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_partnerships_form_order_idx" ON "home_page_blocks_partnerships_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_partnerships_form_parent_id_idx" ON "home_page_blocks_partnerships_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_partnerships_form_path_idx" ON "home_page_blocks_partnerships_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_milestones_order_idx" ON "home_page_blocks_timeline_milestones" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_milestones_parent_id_idx" ON "home_page_blocks_timeline_milestones" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_order_idx" ON "home_page_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_parent_id_idx" ON "home_page_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_path_idx" ON "home_page_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_link_order_idx" ON "navigation_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_link_parent_id_idx" ON "navigation_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_link_path_idx" ON "navigation_blocks_link" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_slug_idx" ON "videos" USING btree ("slug");
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "url";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "thumbnail_u_r_l";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "filename";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "mime_type";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "filesize";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "width";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "height";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "focal_x";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "focal_y";
  DROP TYPE "public"."enum_navigation_blocks_button_variant";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_navigation_blocks_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TABLE IF NOT EXISTS "navigation_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_navigation_blocks_button_variant" DEFAULT 'link' NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_images_block_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_images_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_partnerships_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline_milestones" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_images_block_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_images_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_partnerships_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_timeline_milestones" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navigation_blocks_link" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_contact_form" CASCADE;
  DROP TABLE "pages_blocks_images_block_images" CASCADE;
  DROP TABLE "pages_blocks_images_block" CASCADE;
  DROP TABLE "pages_blocks_partnerships_form" CASCADE;
  DROP TABLE "pages_blocks_timeline_milestones" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "home_page_blocks_contact_form" CASCADE;
  DROP TABLE "home_page_blocks_images_block_images" CASCADE;
  DROP TABLE "home_page_blocks_images_block" CASCADE;
  DROP TABLE "home_page_blocks_partnerships_form" CASCADE;
  DROP TABLE "home_page_blocks_timeline_milestones" CASCADE;
  DROP TABLE "home_page_blocks_timeline" CASCADE;
  DROP TABLE "navigation_blocks_link" CASCADE;
  DROP INDEX IF EXISTS "videos_slug_idx";
  ALTER TABLE "videos" ADD COLUMN "url" varchar;
  ALTER TABLE "videos" ADD COLUMN "thumbnail_u_r_l" varchar;
  ALTER TABLE "videos" ADD COLUMN "filename" varchar;
  ALTER TABLE "videos" ADD COLUMN "mime_type" varchar;
  ALTER TABLE "videos" ADD COLUMN "filesize" numeric;
  ALTER TABLE "videos" ADD COLUMN "width" numeric;
  ALTER TABLE "videos" ADD COLUMN "height" numeric;
  ALTER TABLE "videos" ADD COLUMN "focal_x" numeric;
  ALTER TABLE "videos" ADD COLUMN "focal_y" numeric;
  DO $$ BEGIN
   ALTER TABLE "navigation_blocks_button" ADD CONSTRAINT "navigation_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "navigation_blocks_button_order_idx" ON "navigation_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_button_parent_id_idx" ON "navigation_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_button_path_idx" ON "navigation_blocks_button" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" USING btree ("filename");
  ALTER TABLE "images" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "pages_blocks_panels_panels" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "pages_blocks_panels_panels" DROP COLUMN IF EXISTS "next_to_title";
  ALTER TABLE "pages_blocks_panels_panels" DROP COLUMN IF EXISTS "byline";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "slug";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "slug_lock";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "mux_playback_id";
  ALTER TABLE "videos" DROP COLUMN IF EXISTS "is_featured";
  ALTER TABLE "home_page_blocks_panels_panels" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "home_page_blocks_panels_panels" DROP COLUMN IF EXISTS "next_to_title";
  ALTER TABLE "home_page_blocks_panels_panels" DROP COLUMN IF EXISTS "byline";
  ALTER TABLE "navigation_blocks_dropdown_links" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "navigation_blocks_dropdown_links" DROP COLUMN IF EXISTS "is_disabled";`)
}
