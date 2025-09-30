"use client";
import styles from "./index.module.css";
import { FileOutput } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Question = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.Question}>
      <div className={styles.image}>
        <p>画像</p>
        <div className={styles.filemix}>
          <input
            className={styles.file}
            type="file"
            onChange={handleFileChange}
          ></input>
          {preview && (
            <Image
              className={styles.Image}
              fill
              alt="画像"
              src={preview}
            ></Image>
          )}
          <FileOutput className={styles.FileOutput}></FileOutput>
        </div>
      </div>
    </div>
  );
};

export default Question;
