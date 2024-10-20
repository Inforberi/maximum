// styles
import styles from './css/commercial.module.css';

// components
import HTeg from '@/components/html-tegs/h-tegs/HTeg';
import P from '@/components/html-tegs/p-teg/P';
import Button from '@/components/html-tegs/button-teg/Button';

// hooks
import Image from 'next/image';

// images
import carImage from '/public/commercial/ads.png';

const Commercial = () => {
    return (
        <section className={styles.commercialSection}>
            <div className={`homePage ${styles.container}`}>
                <div>
                    <div className={styles.title}>
                        <HTeg color="white" fontSize="big" hTeg="h2">
                            Кредит на новый Chery Tiggo
                        </HTeg>
                    </div>
                    <div className={styles.text}>
                        <P color="white" fontWeight="medium" fontSize="medium">
                            Оформите кредит на любой автомобиль ассортимента
                            дилерского центра «Максимум»
                        </P>
                    </div>
                    <div className={styles.button}>
                        <Button href="/" variant="filledButton">
                            Оформить
                        </Button>
                    </div>
                </div>

                <Image
                    className={styles.carImage}
                    src={carImage}
                    quality={100}
                    alt="Авто"
                />
            </div>
        </section>
    );
};

export default Commercial;
