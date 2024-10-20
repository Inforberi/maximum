// components
import { getCars } from '@/api/getData';
import HTeg from '@/components/html-tegs/h-tegs/HTeg';
import CurrentCar from '@/components/pages/car-pages/01-current-car/CurrentCar';
import Commercial from '@/components/pages/car-pages/02-commercial/Commercial';
import Header from '@/components/pages/home-page/header/Header';
import { CarData } from '@/types';

// data

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
            <Header page="car" />
            <main>
                <section className="carPage">
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
            </main>
        </>
    );
};

export default CarPage;
