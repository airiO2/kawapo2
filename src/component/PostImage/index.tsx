import styles from "./index.module.css"
import Image from "next/image"

interface PostimageProps{
link: string;
tate: number;
yoko: number;
};

const Postimage=({link, tate, yoko}:PostimageProps)=>{
    return(
        <>
        <Image 
        className={styles.Image}
        width={yoko}
        height={tate}
        alt="PostImage"
        src={link}
        style={{width:yoko, height:tate}}
        ></Image>
        </>
    );
}

export default Postimage;