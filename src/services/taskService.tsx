import { supabase } from "@/src/lib/supabase";

export function get_real_time_changes(
  user_id: string,
  onChange: (payload: any) => void
) {
  const channel = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "tasks" },
      (payload) => {
        if (payload.new.user_id === user_id) {
          onChange(payload);
        }
      }
    )
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "tasks" },
      (payload) => {
        if (payload.new.user_id === user_id) {
          onChange(payload);
        }
      }
    )
    .on(
      "postgres_changes",
      { event: "DELETE", schema: "public", table: "tasks" },
      (payload) => {
        onChange(payload);
      }
    )
    .subscribe();

  return {
    channel,
    unsubscribe: () => {
      channel.unsubscribe();
    },
  };
}

export async function get_user_Tasks({ user_Id }: { user_Id: string }) {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user_Id)
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return data;
}
