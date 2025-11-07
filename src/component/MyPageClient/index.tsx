"use client";
import Avatar from "@/component/Avatar";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Postimage from "../PostImage";

export default function MyPpage({ user }: { user: User | null }) {
  const supabase = createClient();
  const [fullname, setFullname] = useState<string | null>(null);
  
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [image_url, setImageUrl] = useState<{img: string, id: number}[]>([]);

// setAvatarUrlでavatar_urlを更新しているので、Avatarコンポーネントに正しいURLが渡される。

  const getProfile = useCallback(async () => {
    try {

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
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
    }
  }, [user, supabase]);

  

  const getPostImage = useCallback(async () => {
    try {

      const { data, error, status } = await supabase
        .from("posts")
        .select(`img, id`)
        .eq("user_id", user?.id);
        // "user_id"は、投稿テーブルの中のuser_idというカラム名を指している。
      

      console.log("Post Image Data:", data);

      if (error && status !== 406) {
         console.log(error);
        throw error;
      }
      
      if (data) {
        setImageUrl(data);
        // setImageUrlは、ImageUrlをsetする変数！
      }

    } catch (error) {
      alert("Error loading post image!");
      console.log(error);
    } finally {
    }
  }, [user, supabase]);

  useEffect(() =>{
    
    getPostImage();
    getProfile();
  },[user, getPostImage, getProfile]);




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
      <div className={styles.preview}>
        {image_url.length}
      </div>
      <div className={styles.level2}>
      {image_url.map((imageObj, index) => (
      <Link href={`/mypage/${imageObj.id}`} key={index}> <Postimage  link={imageObj.img} tate={100} yoko={100} /></Link>
      ))
      }
      </div>
    </>
  );
}
