import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Note } from "./note";
import { createNote } from "./saveNote";

export default async function Page() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const { data: notes } = await supabase
		// .from("groups")
		// .select("*,groups_players!group_id(...groups!group_id(*))");
		.from("profiles")
		.select("*");

	// return <pre>{JSON.stringify(notes, null, 2)}</pre>;

	return (
		<div className="flex flex-col">
			{notes?.map((note) => (
				<Note key={note.id} note={note} />
			))}
		</div>
	);
}
