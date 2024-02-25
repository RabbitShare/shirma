"use client";

import { Button } from "@/components/ui/button";
import { Tables } from "@/utils/supabase/type-helpers";
import { useState } from "react";
import { createNote, saveValue } from "./saveNote";

export const Note = ({ note }: { note: Tables<"notes"> }) => {
	const [value, setValue] = useState(note.title ?? "");

	return (
		<>
			<Button onClick={() => createNote()}>create</Button>

			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button
				type="button"
				onClick={() => saveValue({ ...note, title: value })}
			>
				Save
			</button>
		</>
	);
};
