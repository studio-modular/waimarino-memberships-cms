import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_carousel_slides_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_media_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_panels_panels_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_users_role" AS ENUM('General', 'Marketer', 'Administrator');
  CREATE TYPE "public"."enum_home_page_blocks_carousel_slides_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_home_page_blocks_media_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_home_page_blocks_panels_panels_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_navigation_blocks_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TABLE IF NOT EXISTS "images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar NOT NULL,
  	"alternative_text" varchar NOT NULL,
  	"blurhash" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_extra_large_url" varchar,
  	"sizes_extra_large_width" numeric,
  	"sizes_extra_large_height" numeric,
  	"sizes_extra_large_mime_type" varchar,
  	"sizes_extra_large_filesize" numeric,
  	"sizes_extra_large_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_carousel_slides_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_pages_blocks_carousel_slides_buttons_variant" DEFAULT 'link' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"is_full_screen" boolean DEFAULT false,
  	"width" varchar DEFAULT '100%' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"width" varchar DEFAULT '100%' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_pages_blocks_media_buttons_variant" DEFAULT 'link' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_panels_panels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_panels_panels_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL,
  	"variant" "enum_pages_blocks_panels_panels_buttons_variant" DEFAULT 'link' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_panels_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"more_details" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_panels" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_rich_text" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_full_screen" boolean DEFAULT false,
  	"color" varchar DEFAULT '#ffffff' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'General' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar NOT NULL,
  	"cover_id" integer NOT NULL,
  	"aspect_ratio" varchar DEFAULT '16/9' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"pages_id" integer,
  	"users_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "navigation_blocks_dropdown_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar DEFAULT '/' NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_blocks_dropdown" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_carousel_slides_buttons" ADD CONSTRAINT "pages_blocks_carousel_slides_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_carousel_slides" ADD CONSTRAINT "pages_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_carousel" ADD CONSTRAINT "pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_buttons" ADD CONSTRAINT "pages_blocks_media_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_panels_panels_items" ADD CONSTRAINT "pages_blocks_panels_panels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_panels_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_panels_panels_buttons" ADD CONSTRAINT "pages_blocks_panels_panels_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_panels_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_panels_panels" ADD CONSTRAINT "pages_blocks_panels_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_panels" ADD CONSTRAINT "pages_blocks_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sections_block" ADD CONSTRAINT "pages_blocks_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "videos" ADD CONSTRAINT "videos_cover_id_images_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_blocks_button" ADD CONSTRAINT "navigation_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_blocks_dropdown_links" ADD CONSTRAINT "navigation_blocks_dropdown_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_blocks_dropdown"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_blocks_dropdown" ADD CONSTRAINT "navigation_blocks_dropdown_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_small_sizes_small_filename_idx" ON "images" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_medium_sizes_medium_filename_idx" ON "images" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_large_sizes_large_filename_idx" ON "images" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_extra_large_sizes_extra_large_filename_idx" ON "images" USING btree ("sizes_extra_large_filename");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_slides_buttons_order_idx" ON "pages_blocks_carousel_slides_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_slides_buttons_parent_id_idx" ON "pages_blocks_carousel_slides_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_slides_order_idx" ON "pages_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_slides_parent_id_idx" ON "pages_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_order_idx" ON "pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_parent_id_idx" ON "pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_carousel_path_idx" ON "pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_buttons_order_idx" ON "pages_blocks_media_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_buttons_parent_id_idx" ON "pages_blocks_media_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_order_idx" ON "pages_blocks_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_parent_id_idx" ON "pages_blocks_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_path_idx" ON "pages_blocks_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_panels_items_order_idx" ON "pages_blocks_panels_panels_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_panels_items_parent_id_idx" ON "pages_blocks_panels_panels_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_panels_buttons_order_idx" ON "pages_blocks_panels_panels_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_panels_buttons_parent_id_idx" ON "pages_blocks_panels_panels_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_panels_order_idx" ON "pages_blocks_panels_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_panels_parent_id_idx" ON "pages_blocks_panels_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_order_idx" ON "pages_blocks_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_parent_id_idx" ON "pages_blocks_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_panels_path_idx" ON "pages_blocks_panels" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sections_block_order_idx" ON "pages_blocks_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sections_block_parent_id_idx" ON "pages_blocks_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sections_block_path_idx" ON "pages_blocks_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_title_idx" ON "pages" USING btree ("title");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_images_id_idx" ON "pages_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_videos_id_idx" ON "pages_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "videos_cover_idx" ON "videos" USING btree ("cover_id");
  CREATE INDEX IF NOT EXISTS "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_buttons_order_idx" ON "home_page_blocks_carousel_slides_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_buttons_parent_id_idx" ON "home_page_blocks_carousel_slides_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_order_idx" ON "home_page_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_slides_parent_id_idx" ON "home_page_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_order_idx" ON "home_page_blocks_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_parent_id_idx" ON "home_page_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_carousel_path_idx" ON "home_page_blocks_carousel" USING btree ("_path");
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
  CREATE INDEX IF NOT EXISTS "home_page_blocks_rich_text_order_idx" ON "home_page_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_rich_text_parent_id_idx" ON "home_page_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_rich_text_path_idx" ON "home_page_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_sections_block_order_idx" ON "home_page_blocks_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_sections_block_parent_id_idx" ON "home_page_blocks_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_sections_block_path_idx" ON "home_page_blocks_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_rels_order_idx" ON "home_page_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "home_page_rels_parent_idx" ON "home_page_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_rels_path_idx" ON "home_page_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "home_page_rels_images_id_idx" ON "home_page_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "home_page_rels_videos_id_idx" ON "home_page_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_button_order_idx" ON "navigation_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_button_parent_id_idx" ON "navigation_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_button_path_idx" ON "navigation_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_dropdown_links_order_idx" ON "navigation_blocks_dropdown_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_dropdown_links_parent_id_idx" ON "navigation_blocks_dropdown_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_dropdown_order_idx" ON "navigation_blocks_dropdown" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_dropdown_parent_id_idx" ON "navigation_blocks_dropdown" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_blocks_dropdown_path_idx" ON "navigation_blocks_dropdown" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "images" CASCADE;
  DROP TABLE "pages_blocks_carousel_slides_buttons" CASCADE;
  DROP TABLE "pages_blocks_carousel_slides" CASCADE;
  DROP TABLE "pages_blocks_carousel" CASCADE;
  DROP TABLE "pages_blocks_media_buttons" CASCADE;
  DROP TABLE "pages_blocks_media" CASCADE;
  DROP TABLE "pages_blocks_panels_panels_items" CASCADE;
  DROP TABLE "pages_blocks_panels_panels_buttons" CASCADE;
  DROP TABLE "pages_blocks_panels_panels" CASCADE;
  DROP TABLE "pages_blocks_panels" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_sections_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_page_blocks_carousel_slides_buttons" CASCADE;
  DROP TABLE "home_page_blocks_carousel_slides" CASCADE;
  DROP TABLE "home_page_blocks_carousel" CASCADE;
  DROP TABLE "home_page_blocks_media_buttons" CASCADE;
  DROP TABLE "home_page_blocks_media" CASCADE;
  DROP TABLE "home_page_blocks_panels_panels_items" CASCADE;
  DROP TABLE "home_page_blocks_panels_panels_buttons" CASCADE;
  DROP TABLE "home_page_blocks_panels_panels" CASCADE;
  DROP TABLE "home_page_blocks_panels" CASCADE;
  DROP TABLE "home_page_blocks_rich_text" CASCADE;
  DROP TABLE "home_page_blocks_sections_block" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "home_page_rels" CASCADE;
  DROP TABLE "navigation_blocks_button" CASCADE;
  DROP TABLE "navigation_blocks_dropdown_links" CASCADE;
  DROP TABLE "navigation_blocks_dropdown" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_carousel_slides_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_media_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_panels_panels_buttons_variant";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_home_page_blocks_carousel_slides_buttons_variant";
  DROP TYPE "public"."enum_home_page_blocks_media_buttons_variant";
  DROP TYPE "public"."enum_home_page_blocks_panels_panels_buttons_variant";
  DROP TYPE "public"."enum_navigation_blocks_button_variant";`)
}
