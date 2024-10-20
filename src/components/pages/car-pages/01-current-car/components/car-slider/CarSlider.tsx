'use client';

// styles
import styles from './css/carSlider.module.css';

// hooks
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

// components
import ProgressBar from './components/progress-bar/ProgressBar';

// types
import { CurrentCarProps } from '../../../../../../types/index';

const CarSlider = ({ car }: CurrentCarProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, duration: 50 },
        [
            Autoplay({
                stopOnMouseEnter: true,
                delay: 6000,
                stopOnInteraction: false,
            }),
        ]
    );
    const [scrollProgress, setScrollProgress] = useState(0);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100); // Прогресс в процентах
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        // Устанавливаем прогресс при каждой прокрутке
        emblaApi.on('scroll', onScroll);
        emblaApi.on('reInit', onScroll); // Обновление прогресса при реинициализации

        // Обновляем прогресс при первом рендере
        onScroll();

        return () => {
            emblaApi.off('scroll', onScroll);
            emblaApi.off('reInit', onScroll);
        };
    }, [emblaApi, onScroll]);

    return (
        <div className={styles.photoSlider}>
            <div className={styles.slider} ref={emblaRef}>
                <div className={styles.sliderContainer}>
                    {car?.photobank.imgs.map((img, index) => (
                        <div className={styles.slide} key={index}>
                            <Image
                                src={img.url}
                                alt={car.feedData.modelName}
                                width={900}
                                height={800}
                                quality={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ProgressBar scrollProgress={scrollProgress} />
        </div>
    );
};

export default CarSlider;
