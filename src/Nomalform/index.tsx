import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";

interface NomalformProps {
  text: string;
}

const Nomalform = ({ text }: NomalformProps) => {
  return (
    <div>
      <p>{text}</p>
      <textarea></textarea>
    </div>
  );
};

export default Nomalform;
