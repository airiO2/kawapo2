import styles from "./index.module.css"

interface textProps{
    text: string;
}

const PostText =({text}: textProps)=>{
    return(
<>
<p className={styles.text}>{text}</p>

</>
    );

}

export default PostText;