import Image from "next/image";
import styles from "./page.module.css"
import { Globe } from "lucide-react";
import Postimage from "@/component/PostImage";
import Link from "next/link";

export default function mypage(){
return(
<>

<Image 
className={styles.image}
height={100}
width={100}
alt="icon"
src={"@/"}
>
</Image>

<h1 className={styles.name}>[なまえ]</h1>
<p className={styles.text}><Link className={styles.butoon} href="/edit">編集</Link></p>

<p className={styles.level}>かわいいレベル</p>
<div className={styles.preview}></div>




</>


);


};