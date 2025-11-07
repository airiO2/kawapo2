"use server"

import { createClient } from "@/utils/supabase/server";


// (limit): numberにすることで、コンポーネントみたいに、ほかの場所で使うときに汎用性が高くなるよ。
export async function homeposting(limit: number){
    const supabase = await createClient();  

const { data: postData} = await supabase
    .from("posts")
    .select("*,user_id(*)")
    .limit(limit)
    .order("created_at", { ascending: false });
    // ascending: false は、新しい投稿を上にする為にある。ascending: true にすると、古い投稿が上に来る。ascendingは昇順という意味。
// この括弧内のlimitのところに数字を入れることで、その数字分だけ投稿を取得できる。
    return postData; 
}

export async function mypageuniqueposting(postId: number){
    const supabase = await createClient();  

const { data: postData} = await supabase
    .from("posts")
    .select("*,user_id(*)")
    .eq("id", postId)
    .single();

    return postData;
}