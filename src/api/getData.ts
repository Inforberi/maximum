import { CarListData } from '../types/index';

// Изменяем возвращаемый тип на Promise<CarListData>
export const getCars = async (brand: string): Promise<CarListData> => {
    try {
        const response = await fetch(
            `https://maximum.expert/api/stock-test?brand=${brand}`,
            { next: { revalidate: 600 } }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: CarListData = await response.json(); // Ожидаем, что API вернет объект CarListData

        return data;
    } catch {
        // Возвращаем объект с пустым массивом list в случае ошибки
        return {
            list: [],
        };
    }
};
