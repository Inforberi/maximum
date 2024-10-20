'use client';

// styles
import styles from './css/filterSection.module.css';
import cn from 'classnames';

// components
import P from '@/components/html-tegs/p-teg/P';

interface FilterSectionProps {
    title: string;
    listFilter: string[];
    setValue: (value: string) => void;
    selectedValue: string;
}

const FilterSection = ({
    title,
    listFilter,
    setValue,
    selectedValue,
}: FilterSectionProps) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <P color="black" fontWeight="medium" fontSize="medium">
                    {title}
                </P>
            </div>
            <ul className={styles.list}>
                {listFilter.map((value, index) => (
                    <li key={index}>
                        <button
                            className={cn(styles.link, {
                                [styles.filled]: selectedValue === value,
                            })}
                            onClick={() => setValue(value)}
                        >
                            {value} {title === 'Объем двигателя' && 'л.'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSection;
