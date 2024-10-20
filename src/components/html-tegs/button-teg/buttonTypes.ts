import { LinkProps } from 'next/link';

// Интерфейс для компонента P
export interface ButtonTegProps extends LinkProps {
    href: string;
    variant: 'filledButton' | 'transparentButton';
    children: React.ReactNode;
}
