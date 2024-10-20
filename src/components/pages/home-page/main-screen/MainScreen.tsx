// styles
import styles from './css/mainScreen.module.css';

// components
import Cars from './components/cars/Cars';
import FilterCars from './components/filter-cars/FilterCars';

// types
import { CarsProps } from '../../../../types/index';

const MainScreen = ({ cars, noDataMessage, noFiltersMessage }: CarsProps) => {
    return (
        <div className={styles.container}>
            <FilterCars />
            <Cars
                cars={cars}
                noDataMessage={noDataMessage}
                noFiltersMessage={noFiltersMessage}
            />
        </div>
    );
};

export default MainScreen;
