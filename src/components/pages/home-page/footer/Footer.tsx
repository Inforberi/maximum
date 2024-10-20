'use client';

// styles
import styles from './css/footer.module.css';

// hooks
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// image
import logo from '/public/metadata/logo.svg';

// utils
import { handleGoHome } from '@/utils/functions';

const Footer = () => {
    const router = useRouter();

    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.container}>
                <Link
                    href="/"
                    passHref
                    onClick={() => handleGoHome(router)}
                    className={styles.logo}
                >
                    <Image src={logo} alt="Логотип" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
