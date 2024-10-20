// styles
import styles from './css/button.module.css';
import cn from 'classnames';

// hooks
import Link from 'next/link';

// types
import { ButtonTegProps } from './buttonTypes';

const Button = ({ href, variant, children, ...props }: ButtonTegProps) => {
    return (
        <div
            className={cn(styles.base, {
                [styles.transparent]: variant === 'transparentButton',
                [styles.filled]: variant === 'filledButton',
            })}
        >
            <Link href={href} {...props}>
                {children}
            </Link>
        </div>
    );
};

export default Button;
