"use server"

import { createClient } from "@/utils/supabase/server";
import { PostType } from "@/type/post";

// (limit): numberにすることで、コンポーネントみたいに、ほかの場所で使うときに汎用性が高くなるよ。
export async function homeposting(limit: number){
    const supabase = await createClient();  

const { data: postData, error } = await supabase
    .from("posts")
    .select("*,user_id(*)")
    .limit(limit)
// この括弧内のlimitのところに数字を入れることで、その数字分だけ投稿を取得できる。
    return postData; 
}