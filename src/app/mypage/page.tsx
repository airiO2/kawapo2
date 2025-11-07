import MyPageClient from '@/component/MyPageClient'
import { createClient } from '@/utils/supabase/server'



export default async function mypage() {
    const supabase = await createClient()

    const {
        data: { user },

        

    } = await supabase.auth.getUser()

    return <MyPageClient user={user} />

}

