import { Database } from "@/database.types";
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { objectToCamel, objectToSnake } from "ts-case-convert";

import ky from "ky";
import { ObjectToCamel } from "ts-case-convert/lib/caseConvert";

const api = ky.extend({
	hooks: {
		beforeRequest: [
			(request, options) => {
				if (options.body && typeof options.body === "string") {
					const body = JSON.parse(options.body);
					const convertedBody = objectToSnake(body);
					return new Request(request, { body: JSON.stringify(convertedBody) });
				}
			},
		],
		afterResponse: [
			async (request, options, response) => {
				const body = await response.json();
				const convertedBody = objectToCamel(body) as any;

				console.log(convertedBody);
				return new Response(JSON.stringify(convertedBody), response);
			},
		],
	},
});

export type ConvertDatabaseToCamel<TPublic> = {
	[key in keyof TPublic]: {
		[key2 in keyof TPublic[key]]: {
			[key3 in keyof TPublic[key][key2]]: ObjectToCamel<
				TPublic[key][key2][key3]
			>;
		};
	};
};

export type DatabaseCamelCase = Omit<Database, "public"> & {
	public: ConvertDatabaseToCamel<Database["public"]>;
};

const b: DatabaseCamelCase = {
	public: {
		Tables: {
			groups: {
				Row: {
					masterId: 123,
				},
			},
		},
	},
};

const a: Database = {
	public: {
		Tables: {
			groups: {
				Row: {},
			},
		},
	},
};

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
	return createServerClient<DatabaseCamelCase>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			// global: {
			// 	fetch: api,
			// },
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					try {
						cookieStore.set({ name, value, ...options });
					} catch (error) {
						// The `set` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				},
				remove(name: string, options: CookieOptions) {
					try {
						cookieStore.set({ name, value: "", ...options });
					} catch (error) {
						// The `delete` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				},
			},
		},
	);
};
