interface Filter {
    brand: string;
    engineCapacity: string;
    equipment: string;
}

export const saveFiltersToLocalStorage = (filters: Filter) => {
    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            localStorage.setItem(key, value);
        } else {
            localStorage.removeItem(key);
        }
    });
};

export const loadFiltersFromLocalStorage = () => {
    return {
        brand: localStorage.getItem('brand') || '',
        engineCapacity: localStorage.getItem('engineCapacity') || '',
        equipment: localStorage.getItem('equipment') || '',
    };
};

export const resetFiltersInLocalStorage = () => {
    localStorage.removeItem('brand');
    localStorage.removeItem('engineCapacity');
    localStorage.removeItem('equipment');
};
