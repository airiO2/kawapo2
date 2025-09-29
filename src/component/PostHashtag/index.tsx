import styles from "./index.module.css"


interface HashtagProps {
  text: string;
}

const PostHashtag = ({ text }: HashtagProps) => {
  return (<p className={styles.text}>#{text}</p>);
};

export default PostHashtag;