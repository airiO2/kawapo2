import IDform from "@/component/IDform";
import styles from "./page.module.css"


interface LoginProps{};

const Login=()=>{
return(
    <>
    <div className={styles.IDform}><IDform  text1="メールアドレスを入力" text2="パスワードを入力" text3="ログイン" link="/signup"></IDform></div>
    </>
);

};

export default Login;