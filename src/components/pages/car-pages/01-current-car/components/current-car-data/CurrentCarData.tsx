// styles
import styles from './css/currentCurData.module.css';

// components
import P from '@/components/html-tegs/p-teg/P';

// hooks
import Image from 'next/image';

// images
import yearImg from '/public/current-car-data/year.jpg';
import engineImg from '/public/current-car-data/engine.jpg';
import transmissionImg from '/public/current-car-data/transmission.jpg';

// types
import { CurrentCarProps } from '../../../../../../types/index';

const CurrentCarData = ({ car }: CurrentCarProps) => {
    return (
        <div className={styles.dataContainer}>
            <div className={styles.topData}>
                <div className={styles.background}>
                    <div className={styles.innerContainer}>
                        <P fontSize="large" fontWeight="black" color="red">
                            {car?.feedData.autoPrice}{' '}
                            <span className={styles.symbol}>₽</span>
                        </P>
                    </div>
                </div>
                <div className={styles.background}>
                    <div
                        className={`${styles.innerContainer} ${styles.iconText}`}
                    >
                        <svg
                            viewBox="0 0 27 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.iconGuarantee}
                        >
                            <path
                                d="M13.5 37.25L1.43437 27.4937C1.10937 27.2312 0.872396 26.8958 0.723437 26.4875C0.574479 26.0792 0.5 25.6562 0.5 25.2188V3.125C0.5 2.425 0.74375 1.8125 1.23125 1.2875C1.71875 0.7625 2.2875 0.5 2.9375 0.5H24.0625C24.7125 0.5 25.2812 0.7625 25.7687 1.2875C26.2562 1.8125 26.5 2.425 26.5 3.125V25.2188C26.5 25.6562 26.4255 26.0792 26.2766 26.4875C26.1276 26.8958 25.8906 27.2312 25.5656 27.4937L13.5 37.25ZM13.5 33.9688L24.0625 25.2188V3.125H2.9375V25.2188L13.5 33.9688ZM11.7937 23.25L20.975 13.3625L19.2281 11.525L11.7531 19.575L7.73125 15.2438L6.025 17.0813L11.7937 23.25ZM13.5 3.125H2.9375H24.0625H13.5Z"
                                fill="#CA0100"
                            />
                        </svg>
                        <P fontSize="medium" fontWeight="medium" color="black">
                            Гарантия юр. чистоты
                        </P>
                    </div>
                </div>
            </div>

            <p className={styles.characteristics}>Характеристики</p>
            <div className={styles.background}>
                <div className={styles.technicalSpecifications}>
                    <div className={styles.specification}>
                        <Image src={yearImg} alt="Год выпуска" />
                        <P fontSize="medium" fontWeight="medium" color="black">
                            {car?.feedData.modelYear} год выпуска
                        </P>
                    </div>
                    <div className={styles.specification}>
                        <Image src={engineImg} alt="Двигатель" />
                        <P fontSize="medium" fontWeight="medium" color="black">
                            {car?.feedData.engine.engineCapacity} л /{' '}
                            {car?.feedData.engine.enginePower} л.с. /{' '}
                            {car?.feedData.equipmentVariantTransmissionType}
                        </P>
                    </div>
                    <div className={styles.specification}>
                        <Image src={transmissionImg} alt="Коробка передач" />
                        <P fontSize="medium" fontWeight="medium" color="black">
                            КП -{' '}
                            {car?.feedData.equipmentVariantTransmissionType}
                        </P>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentCarData;
