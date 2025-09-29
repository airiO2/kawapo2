import Signupform from "@/component/Signupform";
import styles from "./page.module.css";
import Header from "@/component/Header";


export default function SignupPage() {
  return (
    <>
    
      <Signupform text1="メールアドレスを入力" text2="パスワードを入力" text3="登録" name="名前を入力" ></Signupform>
    </>
  );
}
