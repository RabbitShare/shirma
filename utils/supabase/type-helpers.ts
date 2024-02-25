import { DatabaseCamelCase } from "@/utils/supabase/server";
export type Tables<
  PublicTableNameOrOptions extends
    | keyof (DatabaseCamelCase["public"]["Tables"] & DatabaseCamelCase["public"]["Views"])
    | { schema: keyof DatabaseCamelCase },
  TableName extends PublicTableNameOrOptions extends { schema: keyof DatabaseCamelCase }
    ? keyof (DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Tables"] &
        DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof DatabaseCamelCase }
  ? (DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Tables"] &
      DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (DatabaseCamelCase["public"]["Tables"] &
      DatabaseCamelCase["public"]["Views"])
  ? (DatabaseCamelCase["public"]["Tables"] &
      DatabaseCamelCase["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof DatabaseCamelCase["public"]["Tables"]
    | { schema: keyof DatabaseCamelCase },
  TableName extends PublicTableNameOrOptions extends { schema: keyof DatabaseCamelCase }
    ? keyof DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof DatabaseCamelCase }
  ? DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof DatabaseCamelCase["public"]["Tables"]
  ? DatabaseCamelCase["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof DatabaseCamelCase["public"]["Tables"]
    | { schema: keyof DatabaseCamelCase },
  TableName extends PublicTableNameOrOptions extends { schema: keyof DatabaseCamelCase }
    ? keyof DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof DatabaseCamelCase }
  ? DatabaseCamelCase[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof DatabaseCamelCase["public"]["Tables"]
  ? DatabaseCamelCase["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof DatabaseCamelCase["public"]["Enums"]
    | { schema: keyof DatabaseCamelCase },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof DatabaseCamelCase }
    ? keyof DatabaseCamelCase[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof DatabaseCamelCase }
  ? DatabaseCamelCase[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof DatabaseCamelCase["public"]["Enums"]
  ? DatabaseCamelCase["public"]["Enums"][PublicEnumNameOrOptions]
  : never
