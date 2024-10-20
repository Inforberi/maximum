import { DetailedHTMLProps, HTMLAttributes } from 'react';

// Интерфейс для компонента P
export interface HTegProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {
    hTeg: 'h1' | 'h2' | 'h3';
    color?: 'black' | 'white';
    fontSize?: 'big' | 'medium';
    children: React.ReactNode;
}
