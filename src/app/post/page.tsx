import styles from "./page.module.css";
import Question from "@/component/Imagepreview";
import { posting } from "@/server/actions/posting";
import { redirect } from "next/navigation";


export default function post() {
  return (
    <form action={posting} className={styles.postform}>
     
      <Question></Question>
      <p>本文入力</p>
      <textarea className={styles.maintext} name="text"></textarea>
      <p>ハッシュタグ入力</p>
      <textarea className={styles.hashtag} name="tag"></textarea>
      <button className={styles.postbutton} type="submit" >
        投稿
      </button>
    </form>
  );
}
