import styles from "./page.module.css";
import Post from "@/component/PostAll";
import { homeposting } from "@/server/actions/homeposting";
import { PostType } from "@/type/post";


// コンポーネントとかはexport default ”コンポーネント名”で作ってるからimportするときに｛｝なしでいい。
// でも、関数名とか変数名は、export内で処理を書いてるから、｛｝で囲む。
// つまり、とってきたいものが一個なら、defaultを使えばいいけど、複数あるなら、defaultじゃなくて、名前付きでexportする必要がある。
// そしたら、","で区切って、複数のものをimportできる。


export default async function homepage() {

  const homeReview = await  homeposting(20);
  
  console.log(homeReview);
  return (
    <>
    {homeReview?.map((post: PostType) => (
      <Post

        key={post.id}
        postId={post?.id }
        icon={post?.user_id?.avatar_url ?? "vercle.svg"}
        name={post?.user_id?.full_name ?? "名無しのかわいい"}
        image={post?.img ?? "vercle.svg"}
        text1={post?.text ?? "これはいぬです"}
        
      ></Post>
))}
    </>
  );
}
