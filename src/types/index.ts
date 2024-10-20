export interface CarFeedData {
    brandName: string;
    modelName: string;
    modelYear: number;
    modelByClassifierName: string;
    equipmentName: string;
    equipmentVariantTransmissionType: string;
    equipmentVariantFuelType: string;
    engine: {
        engineName: string;
        engineCapacity: number;
        engineTransmission: string;
        enginePower: number;
    };
    vin: string;
    color: string;
    autoPrice: number;
    images: { url: string; urlThumb: string }[];
}

export interface CarData {
    feedData: CarFeedData;
    photobank: { imgs: { url: string; urlThumb: string }[] };
}

export interface CarListData {
    list: CarData[];
}

export interface CurrentCarProps {
    car: CarData | undefined;
}

export interface SearchParams {
    brand?: string;
    engineCapacity?: string;
    equipment?: string;
}

export interface HomeProps {
    searchParams: SearchParams;
}

export interface CardDataPhoto {
    feedData: CarData;
}

// all cars

export interface CarsProps {
    cars: CarFeedData[];
    noDataMessage: boolean;
    noFiltersMessage: boolean;
}
