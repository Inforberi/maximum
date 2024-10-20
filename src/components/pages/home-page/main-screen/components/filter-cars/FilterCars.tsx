'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// styles
import styles from './css/filterCars.module.css';

// components
import FilterSection from './components/filter-section/FilterSection';
import Button from '@/components/html-tegs/button-teg/Button';
import {
    saveFiltersToLocalStorage,
    resetFiltersInLocalStorage,
} from '@/utils/filterStorage';

const BRAND_LIST = [
    'Chery',
    'Haval',
    'Geely',
    'Exeed',
    'Audi',
    'Kia',
    'Hyundai',
];

const ENGINE_CAPACITY = ['1.5', '1.6', '2.0'];

const EQUIPMENT = [
    'Action',
    'Techno',
    'Travel',
    'Luxury',
    'Cosmo',
    'Trek',
    'Comfort',
    'Family',
    'Prestige',
    'Elite',
    'Dreamline',
    'Speedline',
    'Ultimate',
];

const FilterCars = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Загрузка значений из localStorage
    const initialBrand =
        typeof window !== 'undefined'
            ? localStorage.getItem('brand') || ''
            : '';
    const initialEngineCapacity =
        typeof window !== 'undefined'
            ? localStorage.getItem('engineCapacity') || ''
            : '';
    const initialEquipment =
        typeof window !== 'undefined'
            ? localStorage.getItem('equipment') || ''
            : '';

    const [brand, setBrand] = useState(initialBrand);
    const [engineCapacity, setEngineCapacity] = useState(initialEngineCapacity);
    const [equipment, setEquipment] = useState(initialEquipment);

    // Применение фильтров и сохранение в Local Storage
    useEffect(() => {
        const params = new URLSearchParams();

        if (brand) params.set('brand', brand);
        if (engineCapacity) params.set('engineCapacity', engineCapacity);
        if (equipment) params.set('equipment', equipment);

        // Обновляем URL
        router.push(`/?${params}`);

        // Сохраняем фильтры в Local Storage
        saveFiltersToLocalStorage({ brand, engineCapacity, equipment });
    }, [brand, engineCapacity, equipment, router]);

    // Сброс фильтров
    const resetFilters = () => {
        setBrand('');
        setEngineCapacity('');
        setEquipment('');
        resetFiltersInLocalStorage();
        router.push('/');
    };

    return (
        <aside className={styles.filterContainer}>
            <FilterSection
                setValue={setBrand}
                selectedValue={searchParams.get('brand') || brand}
                title="Бренд"
                listFilter={BRAND_LIST}
            />
            <FilterSection
                setValue={setEngineCapacity}
                selectedValue={
                    searchParams.get('engineCapacity') || engineCapacity
                }
                title="Объем двигателя"
                listFilter={ENGINE_CAPACITY}
            />
            <FilterSection
                selectedValue={searchParams.get('equipment') || equipment}
                setValue={setEquipment}
                title="Комплектация"
                listFilter={EQUIPMENT}
            />
            <div className={styles.button}>
                <Button
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        resetFilters();
                    }}
                    variant="transparentButton"
                >
                    Сбросить фильтр
                </Button>
            </div>
        </aside>
    );
};

export default FilterCars;
