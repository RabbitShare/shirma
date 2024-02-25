"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

export default function Group({ group }) {
	return (
		<Link href={siteConfig.links.master.groups.slug(group.id)}>
			{group.title}
		</Link>
	);
}
