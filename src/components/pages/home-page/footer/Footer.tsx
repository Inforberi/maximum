// styles
import styles from './css/footer.module.css';

// hooks
import Link from 'next/link';
import Image from 'next/image';

// image
import logo from '/public/metadata/logo.svg';

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.container}>
                <Link href="/" passHref className={styles.logo}>
                    <Image src={logo} alt="Логотип" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
