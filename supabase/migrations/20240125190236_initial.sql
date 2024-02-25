
create table "public"."characters" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."characters" enable row level security;

create table "public"."groups" (
    "id" uuid not null,
    "title" text,
    "description" text,
    "master_id" uuid
);


create table "public"."groups_players" (
    "player_id" uuid not null,
    "group_id" uuid not null
);


create table "public"."notes" (
    "id" uuid not null,
    "title" text,
    "description" text,
    "author_id" uuid
);


create table "public"."profiles" (
    "id" uuid not null,
    "first_name" text,
    "last_name" text
);


alter table "public"."profiles" enable row level security;

CREATE UNIQUE INDEX characters_pkey ON public.characters USING btree (id);

CREATE UNIQUE INDEX groups_pkey ON public.groups USING btree (id);

CREATE UNIQUE INDEX groups_players_pkey ON public.groups_players USING btree (group_id, player_id);   

CREATE UNIQUE INDEX notes_pkey ON public.notes USING btree (id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

alter table "public"."characters" add constraint "characters_pkey" PRIMARY KEY using index "characters_pkey";

alter table "public"."groups" add constraint "groups_pkey" PRIMARY KEY using index "groups_pkey";     

alter table "public"."groups_players" add constraint "groups_players_pkey" PRIMARY KEY using index "groups_players_pkey";

alter table "public"."notes" add constraint "notes_pkey" PRIMARY KEY using index "notes_pkey";        

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."groups" add constraint "groups_master_id_fkey" FOREIGN KEY (master_id) REFERENCES profiles(id) not valid;

alter table "public"."groups" validate constraint "groups_master_id_fkey";

alter table "public"."groups_players" add constraint "groups_players_group_id_fkey" FOREIGN KEY (group_id) REFERENCES groups(id) not valid;

alter table "public"."groups_players" validate constraint "groups_players_group_id_fkey";

alter table "public"."groups_players" add constraint "groups_players_player_id_fkey" FOREIGN KEY (player_id) REFERENCES profiles(id) not valid;

alter table "public"."groups_players" validate constraint "groups_players_player_id_fkey";

alter table "public"."notes" add constraint "notes_author_id_fkey" FOREIGN KEY (author_id) REFERENCES profiles(id) not valid;

alter table "public"."notes" validate constraint "notes_author_id_fkey";

alter table "public"."profiles" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_id_fkey";

grant delete on table "public"."characters" to "anon";

grant insert on table "public"."characters" to "anon";

grant references on table "public"."characters" to "anon";

grant select on table "public"."characters" to "anon";

grant trigger on table "public"."characters" to "anon";

grant truncate on table "public"."characters" to "anon";

grant update on table "public"."characters" to "anon";

grant delete on table "public"."characters" to "authenticated";

grant insert on table "public"."characters" to "authenticated";

grant references on table "public"."characters" to "authenticated";

grant select on table "public"."characters" to "authenticated";

grant trigger on table "public"."characters" to "authenticated";

grant truncate on table "public"."characters" to "authenticated";

grant update on table "public"."characters" to "authenticated";

grant delete on table "public"."characters" to "service_role";

grant insert on table "public"."characters" to "service_role";

grant references on table "public"."characters" to "service_role";

grant select on table "public"."characters" to "service_role";

grant trigger on table "public"."characters" to "service_role";

grant truncate on table "public"."characters" to "service_role";

grant update on table "public"."characters" to "service_role";

grant delete on table "public"."groups" to "anon";

grant insert on table "public"."groups" to "anon";

grant references on table "public"."groups" to "anon";

grant select on table "public"."groups" to "anon";

grant trigger on table "public"."groups" to "anon";

grant truncate on table "public"."groups" to "anon";

grant update on table "public"."groups" to "anon";

grant delete on table "public"."groups" to "authenticated";

grant insert on table "public"."groups" to "authenticated";

grant references on table "public"."groups" to "authenticated";

grant select on table "public"."groups" to "authenticated";

grant trigger on table "public"."groups" to "authenticated";

grant truncate on table "public"."groups" to "authenticated";

grant update on table "public"."groups" to "authenticated";

grant delete on table "public"."groups" to "service_role";

grant insert on table "public"."groups" to "service_role";

grant references on table "public"."groups" to "service_role";

grant select on table "public"."groups" to "service_role";

grant trigger on table "public"."groups" to "service_role";

grant truncate on table "public"."groups" to "service_role";

grant update on table "public"."groups" to "service_role";

grant delete on table "public"."groups_players" to "anon";

grant insert on table "public"."groups_players" to "anon";

grant references on table "public"."groups_players" to "anon";

grant select on table "public"."groups_players" to "anon";

grant trigger on table "public"."groups_players" to "anon";

grant truncate on table "public"."groups_players" to "anon";

grant update on table "public"."groups_players" to "anon";

grant delete on table "public"."groups_players" to "authenticated";

grant insert on table "public"."groups_players" to "authenticated";

grant references on table "public"."groups_players" to "authenticated";

grant select on table "public"."groups_players" to "authenticated";

grant trigger on table "public"."groups_players" to "authenticated";

grant truncate on table "public"."groups_players" to "authenticated";

grant update on table "public"."groups_players" to "authenticated";

grant delete on table "public"."groups_players" to "service_role";

grant insert on table "public"."groups_players" to "service_role";

grant references on table "public"."groups_players" to "service_role";

grant select on table "public"."groups_players" to "service_role";

grant trigger on table "public"."groups_players" to "service_role";

grant truncate on table "public"."groups_players" to "service_role";

grant update on table "public"."groups_players" to "service_role";

grant delete on table "public"."notes" to "anon";

grant insert on table "public"."notes" to "anon";

grant references on table "public"."notes" to "anon";

grant select on table "public"."notes" to "anon";

grant trigger on table "public"."notes" to "anon";

grant truncate on table "public"."notes" to "anon";

grant update on table "public"."notes" to "anon";

grant delete on table "public"."notes" to "authenticated";

grant insert on table "public"."notes" to "authenticated";

grant references on table "public"."notes" to "authenticated";

grant select on table "public"."notes" to "authenticated";

grant trigger on table "public"."notes" to "authenticated";

grant truncate on table "public"."notes" to "authenticated";

grant update on table "public"."notes" to "authenticated";

grant delete on table "public"."notes" to "service_role";

grant insert on table "public"."notes" to "service_role";

grant references on table "public"."notes" to "service_role";

grant select on table "public"."notes" to "service_role";

grant trigger on table "public"."notes" to "service_role";

grant truncate on table "public"."notes" to "service_role";

grant update on table "public"."notes" to "service_role";

grant delete on table "public"."profiles" to "anon";

grant insert on table "public"."profiles" to "anon";

grant references on table "public"."profiles" to "anon";

grant select on table "public"."profiles" to "anon";

grant trigger on table "public"."profiles" to "anon";

grant truncate on table "public"."profiles" to "anon";

grant update on table "public"."profiles" to "anon";

grant delete on table "public"."profiles" to "authenticated";

grant insert on table "public"."profiles" to "authenticated";

grant references on table "public"."profiles" to "authenticated";

grant select on table "public"."profiles" to "authenticated";

grant trigger on table "public"."profiles" to "authenticated";

grant truncate on table "public"."profiles" to "authenticated";

grant update on table "public"."profiles" to "authenticated";

grant delete on table "public"."profiles" to "service_role";

grant insert on table "public"."profiles" to "service_role";

grant references on table "public"."profiles" to "service_role";

grant select on table "public"."profiles" to "service_role";

grant trigger on table "public"."profiles" to "service_role";

grant truncate on table "public"."profiles" to "service_role";

grant update on table "public"."profiles" to "service_role";