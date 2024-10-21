'use client';

// styles
import styles from './css/carSlider.module.css';

// hooks
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';

// components
import ProgressBar from './components/progress-bar/ProgressBar';

// types
import { CurrentCarProps } from '../../../../../../types/index';
import ImageLazyLoad from './components/image-lazy-load/ImageLazyLoad';
import { EmblaCarouselType } from 'embla-carousel';

interface Image {
    url: string;
    urlThumb: string;
}

const CarSlider = ({ car }: CurrentCarProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        if (car?.photobank.imgs) {
            setImages(car?.photobank.imgs);
        }
    }, []);

    const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onScroll(emblaApi);
        emblaApi
            .on('reInit', onScroll)
            .on('scroll', onScroll)
            .on('slideFocus', onScroll);
    }, [emblaApi, onScroll]);

    return (
        <div className={styles.photoSlider}>
            <div className={styles.slider} ref={emblaRef}>
                <div className={styles.sliderContainer}>
                    {images.map((img, index) => (
                        <div className={styles.slide} key={index}>
                            <ImageLazyLoad
                                imgSrc={img.url}
                                alt={car?.feedData.modelName || 'Авто'}
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
