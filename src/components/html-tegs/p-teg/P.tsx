// styles
import styles from './css/p.module.css';
import cn from 'classnames';

// types
import { PTegProps } from './pTegTypes';

const P = ({
    children,
    fontSize = 'small',
    fontWeight = 'medium',
    color = 'black',
    ...props
}: PTegProps) => {
    return (
        <p
            className={cn(
                styles[fontSize + 'FS'],
                styles[fontWeight + 'FW'],
                styles[color + 'C'],
                styles.base
            )}
            {...props}
        >
            {children}
        </p>
    );
};

export default P;
