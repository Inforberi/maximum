'use client';

// styles
import styles from './css/header.module.css';
import cn from 'classnames';

// hooks
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// components
import P from '@/components/html-tegs/p-teg/P';

// images
import logo from '/public/metadata/logo.svg';

// utils
import { handleGoHome } from '@/utils/functions';

const Header = ({ page }: { page: 'home' | 'car' }) => {
    const router = useRouter();

    // const handleGoHome = () => {
    //     // Очистка локального хранилища
    //     if (typeof window! === 'undefined') {
    //         localStorage.removeItem('brand');
    //         localStorage.removeItem('engineCapacity');
    //         localStorage.removeItem('equipment');
    //     }

    //     // Переход на главную страницу без параметров
    //     router.push('/');
    // };

    return (
        <header className={styles.header}>
            <div
                className={cn(styles.container, {
                    homePage: page === 'home',
                    carPage: page === 'car',
                })}
            >
                <Link
                    className={styles.logo}
                    href="/"
                    passHref
                    onClick={() => handleGoHome(router)}
                >
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
