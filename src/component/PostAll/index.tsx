import { hometag } from "@/server/actions/hometag";
import PostHashtag from "../PostHashtag";
import PostHeader from "../PostHeader";
import Postimage from "../PostImage";
import PostText from "../Posttext";
import styles from "./index.module.css";

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

      {taglist?.map((tag, index) => (
        <>
          {Array.isArray(tag.tag_id) ? (
            tag.tag_id.map((t, i) => (
              <PostHashtag text={t.name} key={`${index}-${i}`}></PostHashtag>
            ))
          ) : (
            <PostHashtag text={((tag.tag_id as { name?: string } | null)?.name) ?? ""} key={index}></PostHashtag>
          )}
        </>
      ))}
      </div>
    </div>
  );
};

export default Post;
