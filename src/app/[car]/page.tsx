// components
import HTeg from '@/components/html-tegs/h-tegs/HTeg';
import CurrentCar from '@/components/pages/car-pages/01-current-car/CurrentCar';
import Commercial from '@/components/pages/car-pages/02-commercial/Commercial';

// types
import { CarData } from '@/types';

// data
import { getCars } from '@/api/getData';

export async function generateMetadata({
    params,
    searchParams,
}: {
    params: { car: string };
    searchParams: { brand?: string };
}) {
    const brand = searchParams.brand || '';
    const data = await getCars(brand);

    const car: CarData | undefined = data.list.find(
        (car) => car.feedData.vin === params.car
    );

    if (!car) {
        return {
            title: 'Автомобиль не найден',
            description:
                'Информация о данном автомобиле отсутствует в нашей базе данных.',
        };
    }

    return {
        title: `Закажите ${car.feedData.modelName} ${car.feedData.modelYear} года - Детали автомобиля`,
        description: `Узнайте больше о ${car.feedData.modelName}. VIN: ${car.feedData.vin}`,
    };
}

const CarPage = async ({
    params,
    searchParams,
}: {
    params: { car: string };
    searchParams: { brand?: string };
}) => {
    const brand = searchParams.brand || '';
    const data = await getCars(brand);

    const car: CarData | undefined = data.list.find(
        (car) => car.feedData.vin === params.car
    );

    return (
        <>
            <section className="homePage">
                {car ? (
                    <CurrentCar car={car} />
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '50vh',
                        }}
                    >
                        <HTeg hTeg="h2" fontSize="big" color="black">
                            Данные автомобиля не найдены
                        </HTeg>
                    </div>
                )}
            </section>
            <Commercial />
        </>
    );
};

export default CarPage;
