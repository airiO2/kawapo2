import { fileURLToPath } from "url";
import styles from "./page.module.css";
import Image from "next/image";
import next from "next";
interface HOMEProps {}
import Link from "next/link";
import Button from "@/component/button";


const HOME = () => {
  return (
    <>
    <div className={styles.TopLogo}>
      <Link href="/login">
        <Image
          className={styles.Image}
          width={300}
          height={300}
          alt="LOGO"
          src={"globe.svg"}
        ></Image>
      </Link>
      </div>
    </>
  );
};

export default HOME;
