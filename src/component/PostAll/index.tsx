import styles from "./index.module.css";
import PostHeader from "../Postheader";
import Postimage from "../PostImage";
import PostText from "../Posttext";
import PostHashtag from "../Posthashtag";
import { BetweenVerticalEnd } from "lucide-react";

interface PostProps {
  text1: string;
  icon: string;
  text2: string;
  image: string;
  name: string; 
}

const Post = ({ icon, image, text1, text2, name }: PostProps) => {
  return (
    <div className={styles.PostAll}>
      <PostHeader icon={icon} name={name}></PostHeader>
      <Postimage link={image} tate={300} yoko={300}></Postimage>
      <PostText text={text1}></PostText>
      <PostHashtag text={text2}></PostHashtag>
      
    </div>
  );
};

export default Post;
