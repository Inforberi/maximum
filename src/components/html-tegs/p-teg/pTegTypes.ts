import { DetailedHTMLProps, HTMLAttributes } from 'react';

// Интерфейс для компонента P
export interface PTegProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    fontSize?: 'small' | 'medium' | 'large';
    fontWeight?: 'bold' | 'black' | 'medium';
    color?: 'black' | 'grey' | 'red' | 'white';
    children: React.ReactNode;
}
