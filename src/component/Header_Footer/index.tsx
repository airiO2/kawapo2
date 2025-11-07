import React from "react"
import styles from "./index.module.css"
import Header from "../Header";
import Fooder from "@/component/Footer";

interface AppFrameProps{
    children: React.ReactNode;
};

const AppFrame = ({children}:AppFrameProps) =>{

return(
    <>
    <Header></Header>
   
<main className={styles.main}>{children}</main>
 <Fooder link1="/post" link2="/mypage" link3="/home"></Fooder>
</>
);
}

export default AppFrame;