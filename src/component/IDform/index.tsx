import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";
import { ChevronRight } from "lucide-react";

interface IDformProps {
  text1: string;
  text2?: string;
  text3: string;
  link: string;
}

const IDform = ({ text1, text2, text3, link }: IDformProps) => {
  return (
    <div className={styles.IDform}>
      <div className={styles.word}>
        <h1>ログイン</h1>
        <div className={styles.form}>
          <p>{text1}</p>
          <input type="text"></input>
          <p>{text2}</p>
          <input type="text"></input>
        </div>
      </div>

      <button className={styles.button}>{text3}</button>
      <br></br>
      <a href={link} className={styles.link}>
        新規登録はこちら
      </a>
    </div>
  );
};

export default IDform;
