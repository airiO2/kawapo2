import styles from "./index.module.css";
import { ArrowBigLeft } from 'lucide-react';
import Link from "next/link";

interface HeaderProps{
link: string;
};

const Header=({link}:HeaderProps)=>{
    return(
        <>
        <p className={styles.Header}><Link href="/home"><ArrowBigLeft className={styles.Arrow}></ArrowBigLeft></Link></p>
        </>
    );
}

export default Header;