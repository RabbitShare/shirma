import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import React from "react";
import CreateGroupButton from "./create-group-button";
import Group from "./group";

export default async function Page() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const userId = (await supabase.auth.getUser()).data.user?.id;
	if (!userId) throw new Error("does not access");

	const { data: groups } = await supabase
		.from("profiles")
		.select("id,p:group_id(id),groups!group_id(groups:group_id(*))");
	// .select("id,title")
	// .match({ player_id: userId });
	// .from("groups_players")
	// .select("group:group_id(id,title),player:player_id(id)")
	// .match({ player_id: userId });
	// const { data, error } = await supabase.from("teams").select(`
	// 	id,
	// 	users ( id )
	// `);
	const { data } = await supabase.from("groups").select("id, profiles (id)");

	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			{groups?.map((group) => (
				<div key={group.id}>
					<Group group={group} />
				</div>
			))}
			<CreateGroupButton />
		</div>
	);
}
