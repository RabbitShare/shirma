"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { createGroup } from "./create-group";

export default function CreateGroupButton() {
	const [name, setName] = useState("");

	return (
		<div className="flex gap-4">
			<Input value={name} onChange={(e) => setName(e.target.value)} />
			<Button onClick={() => createGroup({ name })}>Create group</Button>
		</div>
	);
}
