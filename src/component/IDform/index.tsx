import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";
import { ChevronRight } from "lucide-react";
import { login } from './actions'

interface IDformProps {
  text1: string;
  text2?: string;
  text3: string;
  link: string;
}

const IDform = ({ text1, text2, text3, link }: IDformProps) => {
  return (
    <form className={styles.IDform}>
      <div className={styles.word}>
        <h1>ログイン</h1>
        <div className={styles.form}>
          <label htmlFor="email">{text1}</label>
          <input id="email" name="email" type="email" required/>
          <label htmlFor="password">{text2}</label>
          <input id="password" name="password" type="password" required/>
        </div>
      </div>

      <button className={styles.button} formAction={login}>{text3}</button>
      <br></br>
      <a href={link} className={styles.link}>
        新規登録はこちら
      </a>
    </form>
  );
};

export default IDform;
