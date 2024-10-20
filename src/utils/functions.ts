import { useRouter } from 'next/navigation';

export const handleGoHome = (router: ReturnType<typeof useRouter>) => {
    localStorage?.removeItem('brand');
    localStorage?.removeItem('engineCapacity');
    localStorage?.removeItem('equipment');

    router.push('/');
};
