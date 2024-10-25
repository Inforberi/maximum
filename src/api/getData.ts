import { CarListData } from '../types/index';

export const getCars = async (brand: string): Promise<CarListData> => {
    try {
        const response = await fetch(
            `https://maximum.expert/api/stock-test?brand=${brand}`,
            { next: { revalidate: 600 } }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: CarListData = await response.json();

        return data;
    } catch {
        return {
            list: [],
        };
    }
};
