import { supabase } from "@/src/lib/supabase";

export function getRealTimeChanges(onChange: (payload: any) => void) {
  const channel = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "tasks" },
      (payload) => {
        onChange(payload);
      }
    );

  return {
    channel,
    unsubscribe: () => {
      channel.unsubscribe();
    },
  };
}

export async function getTasks({ user_Id }: { user_Id: string }) {
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
