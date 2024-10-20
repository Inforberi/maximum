// components
import MainTitle from '@/components/shared/main-title/MainTitle';
import MainScreen from '@/components/pages/home-page/main-screen/MainScreen';

// data
import { getCars } from '@/api/getData';

// types
import { HomeProps, CarFeedData } from '../types/index';

// utils
import { filterCars } from '@/utils/filterCars';
import { mapCars } from '@/utils/mapCars';

export default async function Home({ searchParams }: HomeProps) {
    const data = await getCars(searchParams.brand || '');

    // Фильтруем и маппим автомобили
    const mappedCars: CarFeedData[] = mapCars(
        filterCars(data.list, searchParams)
    );

    // Проверяем условия для отображения сообщений
    const noDataMessage =
        mappedCars.length === 0 && Object.keys(searchParams).length > 0;
    const noFiltersMessage =
        mappedCars.length === 0 && Object.keys(searchParams).length === 0;

    return (
        <main className="homePage">
            <section>
                <MainTitle
                    title={`Автомобили ${mappedCars[0]?.brandName || ''} в СПб`}
                    page="home-page"
                />
                <MainScreen
                    cars={mappedCars}
                    noDataMessage={noDataMessage}
                    noFiltersMessage={noFiltersMessage}
                />
            </section>
        </main>
    );
}
