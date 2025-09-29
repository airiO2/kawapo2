
import styles from "./index.module.css";
import { CirclePlus } from "lucide-react";
import { UsersRound } from "lucide-react";
import Link from "next/link";

interface FooderProps {
  link1: string;
  link2: string;
}

const Fooder = ({ link1, link2 }: FooderProps) => {
  return (
    <>
      <div className={styles.Fooder}>
        <Link href={link1} className={styles.home}>
          <CirclePlus className={styles.CirclePlus}></CirclePlus>
        </Link>

        <Link href={link2} className={styles.mypage}>
          <UsersRound className={styles.UnderRound}></UsersRound>
        </Link>
      </div>
    </>
  );
};

export default Fooder;
