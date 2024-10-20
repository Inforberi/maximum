// styles
import styles from './css/progressBar.module.css';

const ProgressBar = ({ scrollProgress }: { scrollProgress: number }) => {
    return (
        <div className={styles.progress}>
            <div
                className={styles.progressBar}
                style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
