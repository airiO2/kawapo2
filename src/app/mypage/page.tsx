import Image from "next/image";
import styles from "./page.module.css"
import { Globe } from "lucide-react";
import Postimage from "@/component/PostImage";

export default function mypage(){
return(
<>

<Image 
className={styles.image}
height={100}
width={100}
alt="icon"
src={"globe.svg"}
>
</Image>

<h1>[なまえ]</h1>

<div></div>





</>


);


};