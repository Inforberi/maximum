// styles
import '../styles/css/main.css';

// types
import type { Metadata } from 'next';

// fonts
import localFont from 'next/font/local';
import { Roboto_Flex } from 'next/font/google';

// components
import Footer from '@/components/pages/home-page/footer/Footer';
import Header from '@/components/pages/home-page/header/Header';

// fonts
const robotoFlex = Roboto_Flex({
    weight: ['700'],
    style: ['normal'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--robotoFlex',
});
const tacticSans = localFont({
    src: [
        {
            path: './fonts/TacticSans-Blk.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/TacticSans-Bld.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/TacticSans-Med.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--tacticSans',
});

export const metadata: Metadata = {
    title: 'Тестовое задание для компании Максимум',
    description: 'Описание тестового',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${tacticSans.className} ${robotoFlex.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
