// 'use client';

// // styles
// import styles from './css/imageLazyLoad.module.css';
// import cn from 'classnames';

// // hooks
// import Image from 'next/image';
// import { useState, useCallback } from 'react';

// type PropType = {
//     imgSrc: string;
//     inView: boolean;
//     alt: string;
// };

// const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

// const ImageLazyLoad = ({ imgSrc, inView, alt }: PropType) => {
//     const [hasLoaded, setHasLoaded] = useState(false);

//     const setLoaded = useCallback(() => {
//         if (inView) setHasLoaded(true);
//     }, [inView, setHasLoaded]);

//     console.log(inView);

//     return (
//         <>
//             {!hasLoaded && <div className={styles.lazyLoad}></div>}
//             {/* Сообщение о загрузке */}
//             <Image
//                 className={cn(styles.image, { [styles.loadImage]: hasLoaded })}
//                 src={inView ? imgSrc : PLACEHOLDER_SRC}
//                 alt={alt}
//                 width={900}
//                 height={800}
//                 quality={75}
//                 onLoad={setLoaded}
//             />
//         </>
//     );
// };

// export default ImageLazyLoad;
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
