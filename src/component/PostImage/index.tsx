"use client";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

interface PostimageProps {
  link: string;
  tate: number;
  yoko: number;
}

const Postimage = ({ link, tate, yoko }: PostimageProps) => {
  const [imageError, setImageError] = useState(false);

  // 画像リンクが無効な場合は何も表示しない
  if (!link || link.trim() === "" || imageError) {
    return null;
  }

  // .undefinedが含まれている場合は削除
  let cleanLink = link;
  if (link.endsWith(".undefined")) {
    cleanLink = link.replace(".undefined", "");
  }

  // 直接URLを構築
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const imageUrl =
    cleanLink.startsWith("http://") || cleanLink.startsWith("https://")
      ? cleanLink
      : `${supabaseUrl}/storage/v1/object/public/posts/${cleanLink}`;

  return (
    <>
    
      <Image
        className={styles.Image}
        width={yoko}
        height={tate}
        alt="PostImage"
        src={imageUrl}
        style={{ width: yoko, height: tate }}
        onError={() => {
          console.error("Failed to load image:", imageUrl);
          setImageError(true);
        }}
      ></Image>
    </>
  );
};

export default Postimage;