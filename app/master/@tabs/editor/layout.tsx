import {
	NavigationTabsTrigger,
	Tabs,
	TabsContent,
	TabsList,
} from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }) {
	return (
		// <div className="h-dvh w-full flex justify-center items-center flex-col">
		<div className="h-dvh w-full">{children}</div>
	);
}
