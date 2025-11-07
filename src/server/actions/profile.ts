"use server";

import { getUser } from "@/utils/supabase/actions";
import { createClient } from "@/utils/supabase/server";

export async function getProfile() {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) {
    return null;
  }

  const { data: profileData, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }

  return profileData;
}