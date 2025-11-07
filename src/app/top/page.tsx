import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const HOME = () => {
  return (
    <>
    <div className={styles.TopLogo}>
      <Link href="/login">
        <Image
          className={styles.Image}
          height={105.6}
          width={283.2}
          alt="LOGO"
          src={"/KAWAPO.png"}
        ></Image>
      </Link>
      </div>
    </>
  );
};

export default HOME;
