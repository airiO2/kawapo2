import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";
import { ChevronRight } from "lucide-react";

interface IDformProps {
  text1: string;
  text2?: string;
  text3: string;
  name: string;
}

const Signupform = ({ text1, text2, text3, name }: IDformProps) => {
  return (
    <div className={styles.IDform}>
      <div className={styles.word}>
        <h1>会員登録</h1>
        <div className={styles.form}>
          <p>{name}</p>
          <input type="text"></input>
          <p>{text1}</p>
          <input type="text"></input>
          <p>{text2}</p>
          <input type="text"></input>
        </div>
      </div>

      <button className={styles.button}>{text3}</button>
      <br></br>
    </div>
  );
};

export default Signupform;
