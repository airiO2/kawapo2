import styles from './index.module.css';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
    return (
        <div className={styles.body}>
    <p className={styles.stitch}>
{text}
</p>
</div>
        );

        };

        export default Title;