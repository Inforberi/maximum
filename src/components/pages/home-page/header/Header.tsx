// styles
import styles from './css/header.module.css';
import cn from 'classnames';

// hooks
import Image from 'next/image';
import Link from 'next/link';

// components
import P from '@/components/html-tegs/p-teg/P';

// images
import logo from '/public/metadata/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div
                className={cn(styles.container)}
            >
                <Link className={styles.logo} href="/">
                    <Image src={logo} quality={100} alt="Логотип" />
                </Link>
                <div className={styles.text}>
                    <P color="white" fontSize="small" fontWeight="medium">
                        Официальный дилер Максимум
                    </P>
                </div>
            </div>
        </header>
    );
};

export default Header;
