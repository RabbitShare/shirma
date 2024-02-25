import {
	NavigationTabsTrigger,
	Tabs,
	TabsContent,
	TabsList,
} from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout(props: { tabs: ReactNode }) {
	return (
		<main className="main">
			<div className="flex min-h-screen">
				<Tabs orientation="vertical" className="h-dvh">
					<TabsList className="flex-col h-full justify-start">
						<NavigationTabsTrigger href={siteConfig.links.master.href}>
							Main
						</NavigationTabsTrigger>
						<NavigationTabsTrigger href={siteConfig.links.master.editor.href}>
							Editor
						</NavigationTabsTrigger>
					</TabsList>
				</Tabs>
				<div className="h-dvh w-full flex justify-center items-center">
					{props.tabs}
				</div>
			</div>
		</main>
	);
}
