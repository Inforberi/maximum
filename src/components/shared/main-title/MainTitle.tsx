// styles
import styles from './css/mainTitle.module.css';
import cn from 'classnames';

// components
import HTeg from '@/components/html-tegs/h-tegs/HTeg';
import P from '@/components/html-tegs/p-teg/P';

interface Props {
    title: string;
    page: 'home-page' | 'car-page';
    vin?: string;
}

const MainTitle = ({ title, page, vin }: Props) => {
    return (
        <div
            className={cn({
                [styles.home]: page === 'home-page',
                [styles.cars]: page === 'car-page',
            })}
        >
            <HTeg hTeg="h1">{title}</HTeg>
            {page === 'car-page' && (
                <div className={styles.vin}>
                    <P color="grey" fontSize="small" fontWeight="medium">
                        {vin}
                    </P>
                </div>
            )}
        </div>
    );
};

export default MainTitle;
