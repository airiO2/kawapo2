import styles from "./index.module.css";
import PostHeader from "../PostHeader";
import Postimage from "../PostImage";
import PostText from "../Posttext";
import PostHashtag from "../PostHashtag";
import { BetweenVerticalEnd } from "lucide-react";
import { hometag } from "@/server/actions/hometag";

interface PostProps {
  postId: number;
  text1: string;
  icon: string;

  image: string;
  name: string;
}

const Post = async ({ postId, icon, image, text1, name }: PostProps) => {
  const taglist = await hometag(postId);
  console.log(taglist);

  return (
    <div className={styles.PostAll}>
      <PostHeader icon={icon} name={name}></PostHeader>
      <Postimage link={image} tate={300} yoko={300}></Postimage>
      <PostText text={text1}></PostText>
      <div className={styles.hashtag}>

      {taglist?.map((tag) => (
        <PostHashtag text={tag.tag_id.name}></PostHashtag>
      ))}
      </div>
    </div>
  );
};

export default Post;
