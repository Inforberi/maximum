'use client';

// styles
import styles from './css/imageLazyLoad.module.css';
import cn from 'classnames';

// hooks
import Image from 'next/image';
import { useState } from 'react';

type PropType = {
    imgSrc: string;
    alt: string;
};

const ImageLazyLoad = ({ imgSrc, alt }: PropType) => {
    const [hasLoaded, setHasLoaded] = useState(false);

    const setLoaded = () => {
        setHasLoaded(true);
    };

    return (
        <Image
            className={cn(styles.image, { [styles.loadImage]: hasLoaded })}
            src={imgSrc}
            alt={alt}
            width={900}
            height={500}
            quality={75}
            onLoad={setLoaded}
        />
    );
};

export default ImageLazyLoad;
