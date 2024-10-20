import { CarData, CarFeedData } from '../types/index';

export const mapCars = (cars: CarData[]): CarFeedData[] => {
    return cars.map((car) => {
        const {
            brandName,
            modelName,
            modelYear,
            modelByClassifierName,
            equipmentName,
            equipmentVariantTransmissionType,
            equipmentVariantFuelType,
            engine: {
                engineName,
                engineCapacity,
                engineTransmission,
                enginePower,
            },
            vin,
            color,
            autoPrice,
        } = car.feedData;

        const images =
            car.photobank.imgs.map((img) => ({
                url: img.url,
                urlThumb: img.urlThumb,
            })) || [];

        return {
            brandName,
            modelName,
            modelYear,
            modelByClassifierName,
            equipmentName,
            equipmentVariantTransmissionType,
            equipmentVariantFuelType,
            engine: {
                engineName,
                engineCapacity,
                engineTransmission,
                enginePower,
            },
            vin,
            color,
            autoPrice,
            images,
        };
    });
};
