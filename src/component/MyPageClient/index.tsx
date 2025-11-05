"use client";
import Avatar from "@/component/Avatar";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function MyPpage({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username,  avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return (
    <>
      <div className={styles.icon}>
        <Avatar uid={user?.id ?? null} url={avatar_url} size={150} />
      </div>
      <h1 className={styles.name}>{fullname}</h1>
      <p className={styles.text}>
        <Link className={styles.butoon} href="/edit">
          編集
        </Link>
      </p>

      <p className={styles.level}>かわいいレベル</p>
      <div className={styles.preview}></div>
    </>
  );
}
