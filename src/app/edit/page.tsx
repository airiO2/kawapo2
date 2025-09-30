import styles from "./page.module.css";

export default function edit() {
  return <>
  <p>アイコンを変更</p>

  <p>名前を変更</p>
  <input type="text"></input>
  <p>メールアドレスを変更</p>
  <input type="text"></input>
  <p>パスワードを変更</p>
  <input type="text"></input>
  <p className={styles.update2}><button className={styles.update} type="button">更新</button></p>
  </>;
}
