import styles from "./index.module.css"
import Image from "next/image";

interface headerProps{
icon: string;
name: string;
};

const PostHeader =({icon, name}:headerProps) => {
return(
    <div className={styles.Header}>
<Image 
className={styles.image}
height={30}
width={30}
alt="icon"
src={icon}
>

</Image>

<p className={styles.name}>{name}</p>
    </div>
);

}

export default PostHeader;