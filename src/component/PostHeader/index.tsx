import Avatar from "../Avatar";
import styles from "./index.module.css";

interface headerProps {
  icon: string;
  name: string;
}

const PostHeader = ({ icon, name }: headerProps) => {
  return (
    <div className={styles.Header}>
      <Avatar url={icon} size={30} />

      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default PostHeader;
