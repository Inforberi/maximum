// styles
import styles from './css/car.module.css';

// hooks
import Image from 'next/image';

// components
import P from '@/components/html-tegs/p-teg/P';
import Button from '@/components/html-tegs/button-teg/Button';

// types
import { CarFeedData } from '../../../../../../../../types/index';

const Car = ({ car }: { car: CarFeedData }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.image}>
                <Image
                    src={car.images[0].url}
                    width={850}
                    height={600}
                    quality={100}
                    alt={`Фото ${car.modelName}`}
                />
            </div>
            <div className={styles.carName}>
                <P color="black" fontSize="large" fontWeight="black">
                    {car.modelName}
                </P>
            </div>
            <div className={styles.engine}>
                <P color="grey" fontSize="medium" fontWeight="medium">
                    {car.engine.engineCapacity} / {car.engine.enginePower} Л.С.
                    / MTS
                </P>
            </div>
            <Button
                href={`/${car.vin}?brand=${car.brandName}`}
                variant="filledButton"
            >
                Подробнее
            </Button>
        </div>
    );
};

export default Car;
