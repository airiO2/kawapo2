"use server"

import post from "@/app/post/page";
import { createClient } from "@/utils/supabase/server";

export async function hometag(postId: number){
    const supabase = await createClient();

    const {data: tagData, error} = await supabase
    .from("post_tags")
    .select("tag_id(name)")
    .eq("post_id",  postId)

    // プログラミングの授業でやった項目で、main関数はreturn 0;で終わってたけど
    // 関数作ったときとかは、返り値をちゃんと設定しないといけなかったみたいな感覚
    return tagData;
}