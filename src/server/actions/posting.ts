"use server";

import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/utils/supabase/actions";
import { redirect } from "next/navigation";


export async function posting(formData: FormData) {
    const supabase = await createClient();
    const user = await getUser();
    
    if (!user) {
        throw new Error("User not authenticated");
    }
    
    const img = formData.get("img");
    const text = String(formData.get("text") ?? "");
    const tagRaw = String(formData.get("tag") ?? "");
    
    const tags = tagRaw
    //   tagsは配列でtagRawは改行するごとにハッシュタグの種類を分けるためのプログラム
    .split(/\r?\n/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
    
    console.log("Tags:", tags);
    console.log("Image:", img);
    console.log("Text:", text);
    
    // Fileはコンポーネントみたいなもので、instanceofはそのコンポーネントをインポートしてる感じ。
    // このif文では、imgがFileコンポーネントのインスタンスであるかどうかを判断してる。もし、是ならば、if文が動いて、画像があっぷろーどされる。
      if (img instanceof File) {
          // 現在の時間↓
          const timestamp = Date.now();
          // 拡張子↓
          const extension = img.name.split(".").pop();
          // 保存するときのファイル名を決めてる↓
        const fileName = `${user.id}_${timestamp}.${extension}`;
        // supabaseのstorageに画像をアップロードしてる↓
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("posts")
          .upload(fileName, img);
    
         
          const { data: postData, error: postError } = await supabase
          .from("posts")
          .insert([
              {
                  user_id: user.id,
                  text: text,
                  img: fileName,
                },
            ])
            // カラムの選択
            .select("id")
            // 一個でいいってこと。今回はいらんけど複数あるカラムの時はいるのでかいておく
            .single();
      console.log(postData);
      
      

  for (const tag of tags) {
    const { data: tagData, error: tagError } = await supabase
      .from("tags")
    //   supabaseにタグの情報を入れる↑↓
      .insert([
        {
          name: tag,
        },
    ])
      .select("id")
      .single();
    //   ターミナルで出力して確認するためにconsole.logでtagDataを出力してる
    console.log(tagData);
    
    const { data: postTagData, error: postTagDataEroor } = await supabase
      .from("post_tags")
      .insert([
        {
          post_id: postData?.id,
          tag_id: tagData?.id,
        },
      ]);
  }
      }
    //   全部の処理が終わった後に、ホームにリダイレクト（画面遷移）する。
  redirect("/home");
  return;
}
