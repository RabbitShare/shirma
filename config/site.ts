export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Ширма",
	description: "Мастер ты ли это?",
	links: {
		master: {
			title: "Мастер",
			href: "/master",
			editor: {
				title: "Редактор",
				href: "/master/@tabs/editor",
			},
			groups: {
				title: "Группы",
				href: "/master/groups",
				slug: (slug: string) => `/master/groups/${slug}`,
			},
		},
	},
};
