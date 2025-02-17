import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "home_page_blocks_section_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_01_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_02_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_03_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_04_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_05_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_06_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_07_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_08_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_09_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_10_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_11_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_11_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_12_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_13_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_section_13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_01_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_02_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_03_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_04_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_05_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_06_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_07_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_08_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_09_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_10_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_11_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_11_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_12_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_13_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location_blocks_section_13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "location" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"arrow_text" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "location_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  DROP TABLE "home_page_blocks_carousel_slides_buttons" CASCADE;
  DROP TABLE "home_page_blocks_carousel_slides" CASCADE;
  DROP TABLE "home_page_blocks_carousel" CASCADE;
  DROP TABLE "home_page_blocks_contact_form" CASCADE;
  DROP TABLE "home_page_blocks_images_block_images" CASCADE;
  DROP TABLE "home_page_blocks_images_block" CASCADE;
  DROP TABLE "home_page_blocks_media_buttons" CASCADE;
  DROP TABLE "home_page_blocks_media" CASCADE;
  DROP TABLE "home_page_blocks_panels_panels_items" CASCADE;
  DROP TABLE "home_page_blocks_panels_panels_buttons" CASCADE;
  DROP TABLE "home_page_blocks_panels_panels" CASCADE;
  DROP TABLE "home_page_blocks_panels" CASCADE;
  DROP TABLE "home_page_blocks_partnerships_form" CASCADE;
  DROP TABLE "home_page_blocks_rich_text" CASCADE;
  DROP TABLE "home_page_blocks_sections_block" CASCADE;
  DROP TABLE "home_page_blocks_timeline_milestones" CASCADE;
  DROP TABLE "home_page_blocks_timeline" CASCADE;
  ALTER TABLE "home_page" ADD COLUMN "arrow_text" varchar;
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_carousel_slides" ADD CONSTRAINT "home_page_blocks_section_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_section_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_carousel" ADD CONSTRAINT "home_page_blocks_section_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_media" ADD CONSTRAINT "home_page_blocks_section_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_01_block" ADD CONSTRAINT "home_page_blocks_section_01_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_02_block" ADD CONSTRAINT "home_page_blocks_section_02_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_03_block" ADD CONSTRAINT "home_page_blocks_section_03_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_04_block" ADD CONSTRAINT "home_page_blocks_section_04_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_05_block" ADD CONSTRAINT "home_page_blocks_section_05_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_06_block" ADD CONSTRAINT "home_page_blocks_section_06_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_07_block" ADD CONSTRAINT "home_page_blocks_section_07_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_08_block" ADD CONSTRAINT "home_page_blocks_section_08_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_09_block" ADD CONSTRAINT "home_page_blocks_section_09_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_10_block_slides" ADD CONSTRAINT "home_page_blocks_section_10_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_section_10_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_10_block" ADD CONSTRAINT "home_page_blocks_section_10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_11_block_slides" ADD CONSTRAINT "home_page_blocks_section_11_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_section_11_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_11_block" ADD CONSTRAINT "home_page_blocks_section_11_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_12_block" ADD CONSTRAINT "home_page_blocks_section_12_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_13_block_slides" ADD CONSTRAINT "home_page_blocks_section_13_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_section_13_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_section_13_block" ADD CONSTRAINT "home_page_blocks_section_13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_carousel_slides" ADD CONSTRAINT "location_blocks_section_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_carousel" ADD CONSTRAINT "location_blocks_section_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_media" ADD CONSTRAINT "location_blocks_section_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_01_block" ADD CONSTRAINT "location_blocks_section_01_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_02_block" ADD CONSTRAINT "location_blocks_section_02_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_03_block" ADD CONSTRAINT "location_blocks_section_03_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_04_block" ADD CONSTRAINT "location_blocks_section_04_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_05_block" ADD CONSTRAINT "location_blocks_section_05_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_06_block" ADD CONSTRAINT "location_blocks_section_06_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_07_block" ADD CONSTRAINT "location_blocks_section_07_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_08_block" ADD CONSTRAINT "location_blocks_section_08_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_09_block" ADD CONSTRAINT "location_blocks_section_09_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_10_block_slides" ADD CONSTRAINT "location_blocks_section_10_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_10_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_10_block" ADD CONSTRAINT "location_blocks_section_10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_11_block_slides" ADD CONSTRAINT "location_blocks_section_11_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_11_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_11_block" ADD CONSTRAINT "location_blocks_section_11_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_12_block" ADD CONSTRAINT "location_blocks_section_12_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_13_block_slides" ADD CONSTRAINT "location_blocks_section_13_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_blocks_section_13_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_blocks_section_13_block" ADD CONSTRAINT "location_blocks_section_13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_rels" ADD CONSTRAINT "location_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_rels" ADD CONSTRAINT "location_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "location_rels" ADD CONSTRAINT "location_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_carousel_slides_order_idx" ON "home_page_blocks_section_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_carousel_slides_parent_id_idx" ON "home_page_blocks_section_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_carousel_order_idx" ON "home_page_blocks_section_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_carousel_parent_id_idx" ON "home_page_blocks_section_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_carousel_path_idx" ON "home_page_blocks_section_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_media_order_idx" ON "home_page_blocks_section_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_media_parent_id_idx" ON "home_page_blocks_section_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_media_path_idx" ON "home_page_blocks_section_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_01_block_order_idx" ON "home_page_blocks_section_01_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_01_block_parent_id_idx" ON "home_page_blocks_section_01_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_01_block_path_idx" ON "home_page_blocks_section_01_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_02_block_order_idx" ON "home_page_blocks_section_02_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_02_block_parent_id_idx" ON "home_page_blocks_section_02_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_02_block_path_idx" ON "home_page_blocks_section_02_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_03_block_order_idx" ON "home_page_blocks_section_03_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_03_block_parent_id_idx" ON "home_page_blocks_section_03_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_03_block_path_idx" ON "home_page_blocks_section_03_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_04_block_order_idx" ON "home_page_blocks_section_04_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_04_block_parent_id_idx" ON "home_page_blocks_section_04_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_04_block_path_idx" ON "home_page_blocks_section_04_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_05_block_order_idx" ON "home_page_blocks_section_05_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_05_block_parent_id_idx" ON "home_page_blocks_section_05_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_05_block_path_idx" ON "home_page_blocks_section_05_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_06_block_order_idx" ON "home_page_blocks_section_06_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_06_block_parent_id_idx" ON "home_page_blocks_section_06_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_06_block_path_idx" ON "home_page_blocks_section_06_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_07_block_order_idx" ON "home_page_blocks_section_07_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_07_block_parent_id_idx" ON "home_page_blocks_section_07_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_07_block_path_idx" ON "home_page_blocks_section_07_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_08_block_order_idx" ON "home_page_blocks_section_08_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_08_block_parent_id_idx" ON "home_page_blocks_section_08_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_08_block_path_idx" ON "home_page_blocks_section_08_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_09_block_order_idx" ON "home_page_blocks_section_09_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_09_block_parent_id_idx" ON "home_page_blocks_section_09_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_09_block_path_idx" ON "home_page_blocks_section_09_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_10_block_slides_order_idx" ON "home_page_blocks_section_10_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_10_block_slides_parent_id_idx" ON "home_page_blocks_section_10_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_10_block_order_idx" ON "home_page_blocks_section_10_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_10_block_parent_id_idx" ON "home_page_blocks_section_10_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_10_block_path_idx" ON "home_page_blocks_section_10_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_11_block_slides_order_idx" ON "home_page_blocks_section_11_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_11_block_slides_parent_id_idx" ON "home_page_blocks_section_11_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_11_block_order_idx" ON "home_page_blocks_section_11_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_11_block_parent_id_idx" ON "home_page_blocks_section_11_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_11_block_path_idx" ON "home_page_blocks_section_11_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_12_block_order_idx" ON "home_page_blocks_section_12_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_12_block_parent_id_idx" ON "home_page_blocks_section_12_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_12_block_path_idx" ON "home_page_blocks_section_12_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_13_block_slides_order_idx" ON "home_page_blocks_section_13_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_13_block_slides_parent_id_idx" ON "home_page_blocks_section_13_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_13_block_order_idx" ON "home_page_blocks_section_13_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_13_block_parent_id_idx" ON "home_page_blocks_section_13_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_section_13_block_path_idx" ON "home_page_blocks_section_13_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_slides_order_idx" ON "location_blocks_section_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_slides_parent_id_idx" ON "location_blocks_section_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_order_idx" ON "location_blocks_section_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_parent_id_idx" ON "location_blocks_section_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_carousel_path_idx" ON "location_blocks_section_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_media_order_idx" ON "location_blocks_section_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_media_parent_id_idx" ON "location_blocks_section_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_media_path_idx" ON "location_blocks_section_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_01_block_order_idx" ON "location_blocks_section_01_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_01_block_parent_id_idx" ON "location_blocks_section_01_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_01_block_path_idx" ON "location_blocks_section_01_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_02_block_order_idx" ON "location_blocks_section_02_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_02_block_parent_id_idx" ON "location_blocks_section_02_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_02_block_path_idx" ON "location_blocks_section_02_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_03_block_order_idx" ON "location_blocks_section_03_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_03_block_parent_id_idx" ON "location_blocks_section_03_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_03_block_path_idx" ON "location_blocks_section_03_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_04_block_order_idx" ON "location_blocks_section_04_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_04_block_parent_id_idx" ON "location_blocks_section_04_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_04_block_path_idx" ON "location_blocks_section_04_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_05_block_order_idx" ON "location_blocks_section_05_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_05_block_parent_id_idx" ON "location_blocks_section_05_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_05_block_path_idx" ON "location_blocks_section_05_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_06_block_order_idx" ON "location_blocks_section_06_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_06_block_parent_id_idx" ON "location_blocks_section_06_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_06_block_path_idx" ON "location_blocks_section_06_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_07_block_order_idx" ON "location_blocks_section_07_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_07_block_parent_id_idx" ON "location_blocks_section_07_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_07_block_path_idx" ON "location_blocks_section_07_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_08_block_order_idx" ON "location_blocks_section_08_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_08_block_parent_id_idx" ON "location_blocks_section_08_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_08_block_path_idx" ON "location_blocks_section_08_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_09_block_order_idx" ON "location_blocks_section_09_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_09_block_parent_id_idx" ON "location_blocks_section_09_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_09_block_path_idx" ON "location_blocks_section_09_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_slides_order_idx" ON "location_blocks_section_10_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_slides_parent_id_idx" ON "location_blocks_section_10_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_order_idx" ON "location_blocks_section_10_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_parent_id_idx" ON "location_blocks_section_10_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_10_block_path_idx" ON "location_blocks_section_10_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_slides_order_idx" ON "location_blocks_section_11_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_slides_parent_id_idx" ON "location_blocks_section_11_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_order_idx" ON "location_blocks_section_11_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_parent_id_idx" ON "location_blocks_section_11_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_11_block_path_idx" ON "location_blocks_section_11_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_12_block_order_idx" ON "location_blocks_section_12_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_12_block_parent_id_idx" ON "location_blocks_section_12_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_12_block_path_idx" ON "location_blocks_section_12_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_slides_order_idx" ON "location_blocks_section_13_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_slides_parent_id_idx" ON "location_blocks_section_13_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_order_idx" ON "location_blocks_section_13_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_parent_id_idx" ON "location_blocks_section_13_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "location_blocks_section_13_block_path_idx" ON "location_blocks_section_13_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "location_rels_order_idx" ON "location_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "location_rels_parent_idx" ON "location_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "location_rels_path_idx" ON "location_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "location_rels_images_id_idx" ON "location_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "location_rels_videos_id_idx" ON "location_rels" USING btree ("videos_id");
  DROP TYPE "public"."enum_home_page_blocks_carousel_slides_buttons_variant";
  DROP TYPE "public"."enum_home_page_blocks_media_buttons_variant";
  DROP TYPE "public"."enum_home_page_blocks_panels_panels_buttons_variant";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_home_page_blocks_carousel_slides_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_home_page_blocks_media_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_home_page_blocks_panels_panels_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TABLE IF NOT EXISTS "home_page_blocks_carousel_slides_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_home_page_blocks_carousel_slides_buttons_variant" DEFAULT 'link' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"is_full_screen" boolean DEFAULT false,
  	"width" varchar DEFAULT '100%' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"width" varchar DEFAULT '100%' NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_media_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_home_page_blocks_media_buttons_variant" DEFAULT 'link' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"is_full_screen" boolean DEFAULT false,
  	"width" varchar DEFAULT '100%' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_panels_panels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_panels_panels_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_home_page_blocks_panels_panels_buttons_variant" DEFAULT 'link' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_panels_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"title" varchar,
  	"next_to_title" varchar,
  	"byline" varchar,
  	"more_details" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"before_text" jsonb,
  	"after_text" jsonb,
  	"is_full_screen" boolean DEFAULT false,
  	"color" varchar DEFAULT '#ffffff' NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"is_full_screen" boolean DEFAULT false,
  	"color" varchar DEFAULT '#ffffff' NOT NULL,
  	"width" varchar DEFAULT '100%' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_full_screen" boolean DEFAULT false,
  	"color" varchar DEFAULT '#ffffff' NOT NULL,
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
  
  DROP TABLE "home_page_blocks_section_carousel_slides" CASCADE;
  DROP TABLE "home_page_blocks_section_carousel" CASCADE;
  DROP TABLE "home_page_blocks_section_media" CASCADE;
  DROP TABLE "home_page_blocks_section_01_block" CASCADE;
  DROP TABLE "home_page_blocks_section_02_block" CASCADE;
  DROP TABLE "home_page_blocks_section_03_block" CASCADE;
  DROP TABLE "home_page_blocks_section_04_block" CASCADE;
  DROP TABLE "home_page_blocks_section_05_block" CASCADE;
  DROP TABLE "home_page_blocks_section_06_block" CASCADE;
  DROP TABLE "home_page_blocks_section_07_block" CASCADE;
  DROP TABLE "home_page_blocks_section_08_block" CASCADE;
  DROP TABLE "home_page_blocks_section_09_block" CASCADE;
  DROP TABLE "home_page_blocks_section_10_block_slides" CASCADE;
  DROP TABLE "home_page_blocks_section_10_block" CASCADE;
  DROP TABLE "home_page_blocks_section_11_block_slides" CASCADE;
  DROP TABLE "home_page_blocks_section_11_block" CASCADE;
  DROP TABLE "home_page_blocks_section_12_block" CASCADE;
  DROP TABLE "home_page_blocks_section_13_block_slides" CASCADE;
  DROP TABLE "home_page_blocks_section_13_block" CASCADE;
  DROP TABLE "location_blocks_section_carousel_slides" CASCADE;
  DROP TABLE "location_blocks_section_carousel" CASCADE;
  DROP TABLE "location_blocks_section_media" CASCADE;
  DROP TABLE "location_blocks_section_01_block" CASCADE;
  DROP TABLE "location_blocks_section_02_block" CASCADE;
  DROP TABLE "location_blocks_section_03_block" CASCADE;
  DROP TABLE "location_blocks_section_04_block" CASCADE;
  DROP TABLE "location_blocks_section_05_block" CASCADE;
  DROP TABLE "location_blocks_section_06_block" CASCADE;
  DROP TABLE "location_blocks_section_07_block" CASCADE;
  DROP TABLE "location_blocks_section_08_block" CASCADE;
  DROP TABLE "location_blocks_section_09_block" CASCADE;
  DROP TABLE "location_blocks_section_10_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_10_block" CASCADE;
  DROP TABLE "location_blocks_section_11_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_11_block" CASCADE;
  DROP TABLE "location_blocks_section_12_block" CASCADE;
  DROP TABLE "location_blocks_section_13_block_slides" CASCADE;
  DROP TABLE "location_blocks_section_13_block" CASCADE;
  DROP TABLE "location" CASCADE;
  DROP TABLE "location_rels" CASCADE;
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_carousel_slides_buttons" ADD CONSTRAINT "home_page_blocks_carousel_slides_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_carousel_slides" ADD CONSTRAINT "home_page_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_carousel" ADD CONSTRAINT "home_page_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "home_page_blocks_media_buttons" ADD CONSTRAINT "home_page_blocks_media_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_media" ADD CONSTRAINT "home_page_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_panels_panels_items" ADD CONSTRAINT "home_page_blocks_panels_panels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_panels_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_panels_panels_buttons" ADD CONSTRAINT "home_page_blocks_panels_panels_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_panels_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_panels_panels" ADD CONSTRAINT "home_page_blocks_panels_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_panels" ADD CONSTRAINT "home_page_blocks_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_partnerships_form" ADD CONSTRAINT "home_page_blocks_partnerships_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_rich_text" ADD CONSTRAINT "home_page_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_sections_block" ADD CONSTRAINT "home_page_blocks_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
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
  
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_buttons_order_idx" ON "home_page_blocks_carousel_slides_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_buttons_parent_id_idx" ON "home_page_blocks_carousel_slides_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_order_idx" ON "home_page_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_parent_id_idx" ON "home_page_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_order_idx" ON "home_page_blocks_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_parent_id_idx" ON "home_page_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_path_idx" ON "home_page_blocks_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_contact_form_order_idx" ON "home_page_blocks_contact_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_contact_form_parent_id_idx" ON "home_page_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_contact_form_path_idx" ON "home_page_blocks_contact_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_images_order_idx" ON "home_page_blocks_images_block_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_images_parent_id_idx" ON "home_page_blocks_images_block_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_images_image_idx" ON "home_page_blocks_images_block_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_order_idx" ON "home_page_blocks_images_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_parent_id_idx" ON "home_page_blocks_images_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_images_block_path_idx" ON "home_page_blocks_images_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_media_buttons_order_idx" ON "home_page_blocks_media_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_media_buttons_parent_id_idx" ON "home_page_blocks_media_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_media_order_idx" ON "home_page_blocks_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_media_parent_id_idx" ON "home_page_blocks_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_media_path_idx" ON "home_page_blocks_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_panels_items_order_idx" ON "home_page_blocks_panels_panels_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_panels_items_parent_id_idx" ON "home_page_blocks_panels_panels_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_panels_buttons_order_idx" ON "home_page_blocks_panels_panels_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_panels_buttons_parent_id_idx" ON "home_page_blocks_panels_panels_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_panels_order_idx" ON "home_page_blocks_panels_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_panels_parent_id_idx" ON "home_page_blocks_panels_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_order_idx" ON "home_page_blocks_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_parent_id_idx" ON "home_page_blocks_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_panels_path_idx" ON "home_page_blocks_panels" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_partnerships_form_order_idx" ON "home_page_blocks_partnerships_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_partnerships_form_parent_id_idx" ON "home_page_blocks_partnerships_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_partnerships_form_path_idx" ON "home_page_blocks_partnerships_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_rich_text_order_idx" ON "home_page_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_rich_text_parent_id_idx" ON "home_page_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_rich_text_path_idx" ON "home_page_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_sections_block_order_idx" ON "home_page_blocks_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_sections_block_parent_id_idx" ON "home_page_blocks_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_sections_block_path_idx" ON "home_page_blocks_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_milestones_order_idx" ON "home_page_blocks_timeline_milestones" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_milestones_parent_id_idx" ON "home_page_blocks_timeline_milestones" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_order_idx" ON "home_page_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_parent_id_idx" ON "home_page_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_timeline_path_idx" ON "home_page_blocks_timeline" USING btree ("_path");
  ALTER TABLE "home_page" DROP COLUMN IF EXISTS "arrow_text";`)
}
