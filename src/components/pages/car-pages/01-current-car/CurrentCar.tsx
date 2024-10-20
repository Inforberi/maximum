// styles
import styles from './css/currentCar.module.css';

// components
import MainTitle from '@/components/shared/main-title/MainTitle';
import CarSlider from './components/car-slider/CarSlider';
import CurrentCarData from './components/current-car-data/CurrentCarData';

// types
import { CurrentCarProps } from '../../../../types/index';

const CurrentCar = ({ car }: CurrentCarProps) => {
    return (
        <>
            <MainTitle
                vin={car?.feedData.vin || ''}
                page="car-page"
                title={`${car?.feedData.modelName} ${car?.feedData.modelYear} года`}
            />
            <div className={styles.currentCarContainer}>
                <CurrentCarData car={car} />
                <CarSlider car={car} />
            </div>
        </>
    );
};

export default CurrentCar;
