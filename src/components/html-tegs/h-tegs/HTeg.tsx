// styles
import styles from './css/hTeg.module.css';
import cn from 'classnames';

// types
import { HTegProps } from './hTegTypes';

const HTeg = ({
    children,
    hTeg,
    color = 'black',
    fontSize,
    ...props
}: HTegProps) => {
    switch (hTeg) {
        case 'h1':
            return (
                <h1 className={cn(styles.base, styles.h1)} {...props}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2
                    className={cn(styles.base, {
                        [styles.black]: color === 'black',
                        [styles.white]: color === 'white',
                        [styles.bigFS]: fontSize === 'big',
                        [styles.medium]: fontSize === 'medium',
                    })}
                    {...props}
                >
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 className={cn(styles.base, styles.h3)} {...props}>
                    {children}
                </h3>
            );
        default:
            return (
                <h2
                    className={cn(styles.base, {
                        [styles.black]: (color = 'black'),
                        [styles.white]: (color = 'white'),
                        [styles.bigFS]: (fontSize = 'big'),
                        [styles.medium]: (fontSize = 'medium'),
                    })}
                    {...props}
                >
                    {children}
                </h2>
            );
    }
};

export default HTeg;
