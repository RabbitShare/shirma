import { Database as DatabaseBase } from "@/database.types";
import {ConvertDatabaseToCamel,DatabaseCamelCase } from '@/utils/supabase/server'
// type ConvertDatabaseToCamel<TPublic extends DatabaseBase["public"]> = {
// 	[key in keyof TPublic]: {
// 		[key2 in keyof TPublic[key]]: {
// 			[key3 in keyof TPublic[key][key2]]: ObjectToCamel<
// 				TPublic[key][key2][key3]
// 			>;
// 		};
// 	};
// };

const a: ConvertDatabaseToCamel<DatabaseBase["public"]> = {
  Tables: {
    notes: {
      Row: {

      }
    }
  }
}

declare module "@/database.types" {
  // export interface Database extends DatabaseCamelCase {}
	export interface Database {
		// public: ConvertDatabaseToCamel<DatabaseBase["public"]>;
    public: {
      asd: 123,
    }
    jopa: 123
	}
}
