import { supabase } from "@/src/lib/supabase";

export async function sign_up_with_email({
  email,
  password,
  username,
  full_name,
}: {
  email: string;
  password: string;
  username: string;
  full_name: string;
}) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        full_name,
      },
    },
  });
  if (error) {
    throw error;
  }
}

export async function sign_in_with_email({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }
}

export async function log_out() {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    throw error;
  }
}
