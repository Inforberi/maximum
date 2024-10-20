import { CarData, SearchParams } from '../types/index';

export const filterCars = (
    cars: CarData[],
    searchParams: SearchParams
): CarData[] => {
    return cars.filter((car) => {
        const matchesBrand =
            !searchParams.brand ||
            car.feedData.brandName === searchParams.brand;
        const matchesEngineCapacity =
            !searchParams.engineCapacity ||
            car.feedData.engine.engineCapacity ===
                Number(searchParams.engineCapacity);
        const matchesEquipment =
            !searchParams.equipment ||
            car.feedData.equipmentName === searchParams.equipment;

        return matchesBrand && matchesEngineCapacity && matchesEquipment;
    });
};
