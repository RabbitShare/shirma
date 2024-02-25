"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createGroup = async ({ name }) => {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const masterId = (await supabase.auth.getUser()).data.user?.id;
	await supabase.from("groups").upsert({ master_id: masterId, title: name });

	revalidatePath("/master/@tabs/groups");
};
