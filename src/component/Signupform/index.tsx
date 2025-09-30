import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";
import { ChevronRight } from "lucide-react";
import { signup } from './actions'

interface IDformProps {
  text1: string;
  text2?: string;
  text3: string;
  name: string;
}

const Signupform = ({ text1, text2, text3, name }: IDformProps) => {
  return (
    <form className={styles.IDform}>
      <div className={styles.word}>
        <h1>会員登録</h1>
        <div className={styles.form}>
          <label htmlFor="name">{name}</label>
          <input id="name" name="name" type="text"></input>
          <label htmlFor="email">{text1}</label>
          <input id="email" name="email"type="email"></input>
          <label htmlFor="password">{text2}</label>
          <input id="password" name="password" type="password"></input>
        </div>
      </div>

      <button className={styles.button} formAction={signup}>{text3}</button>
      <br></br>
    </form>
  );
};

export default Signupform;
