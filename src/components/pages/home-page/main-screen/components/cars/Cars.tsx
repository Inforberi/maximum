// hooks
import React from 'react';

// styles
import styles from './css/cars.module.css';

// components
import Car from './components/car/Car';
import HTeg from '@/components/html-tegs/h-tegs/HTeg';

// types
import { CarsProps, CarFeedData } from '../../../../../../types/index';

const Cars = ({ cars, noDataMessage, noFiltersMessage }: CarsProps) => {
    return (
        <div>
            {noFiltersMessage ? (
                <HTeg hTeg="h3" fontSize="medium">
                    Пожалуйста, выберите фильтры для поиска автомобилей.
                </HTeg>
            ) : noDataMessage ? (
                <HTeg hTeg="h3" fontSize="medium">
                    Нет данных по выбранным фильтрам.
                </HTeg>
            ) : (
                <div className={styles.cards}>
                    {cars.map((car: CarFeedData, index: number) => (
                        <React.Fragment key={index}>
                            <Car car={car} />
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cars;
