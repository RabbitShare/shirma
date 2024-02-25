"use server";

import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/utils/supabase/type-helpers";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export const saveValue = async (note: Tables<"notes">) => {
	await supabase
		.from("notes")
		.update({ title: note.title })
		.match({ id: note.id });

	revalidatePath("/master/@tabs/notes");
};

export const createNote = async () => {
	await supabase
		.from("notes")
		.upsert({
			title: "note.title",
			master_id: "93e17d2e-7ef3-4b38-ad53-8aafba899c9f",
		});

	revalidatePath("/master/@tabs/notes");
};
