export interface PostType {
    id: number;
    created_at: string;
    img: string;
    text: string;
    user_id:{
        id: string;
        username: string;
        full_name: string;
        avatar_url: string;
        updated_at: string;
    }
}