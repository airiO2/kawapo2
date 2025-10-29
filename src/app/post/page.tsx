import styles from "./page.module.css";
import Question from "@/component/Imagepreview";

export default function post() {
  return (
    <>
      <Question></Question>
      <p>本文入力</p>
      <textarea className={styles.maintext}></textarea>
      <p>ハッシュタグ入力</p>
      <textarea className={styles.hashtag}></textarea>
      
      
      <p className={styles.line}></p>
            <button className={styles.postbutton} type="button">投稿</button>
    </>
  );
}
