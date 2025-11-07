import styles from "./page.module.css";
import Post from "@/component/PostAll";
import { homeposting, mypageuniqueposting } from "@/server/actions/homeposting";
import { PostType } from "@/type/post";
import Title from "@/component/Title";
import { promises } from "dns";

// コンポーネントとかはexport default ”コンポーネント名”で作ってるからimportするときに｛｝なしでいい。
// でも、関数名とか変数名は、export内で処理を書いてるから、｛｝で囲む。
// つまり、とってきたいものが一個なら、defaultを使えばいいけど、複数あるなら、defaultじゃなくて、名前付きでexportする必要がある。
// そしたら、","で区切って、複数のものをimportできる。
interface mypageUniquePostType {
    params: Promise<{ postId: number }>;
}

export default async function homepage({params}: mypageUniquePostType) {
  const {postId} = await params;
    const UniquePost = await mypageuniqueposting(postId);
  
  return (
    <>
      <Post
        postId={UniquePost?.id}
        icon={UniquePost?.user_id?.avatar_url ?? "vercle.svg"}
        name={UniquePost?.user_id?.full_name ?? "名無しのかわいい"}
        image={UniquePost?.img ?? "vercle.svg"}
        text1={UniquePost?.text ?? "これはいぬです"}
      ></Post>
    </>
  );
}
