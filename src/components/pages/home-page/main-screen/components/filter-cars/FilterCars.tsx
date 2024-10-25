'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// styles
import styles from './css/filterCars.module.css';

// components
import FilterSection from './components/filter-section/FilterSection';
import Button from '@/components/html-tegs/button-teg/Button';

// Данные для фильтров
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

    const [brand, setBrand] = useState(searchParams.get('brand') || '');
    const [engineCapacity, setEngineCapacity] = useState(
        searchParams.get('engineCapacity') || ''
    );
    const [equipment, setEquipment] = useState(
        searchParams.get('equipment') || ''
    );

    useEffect(() => {
        const params = new URLSearchParams();

        if (brand) params.set('brand', brand);
        if (engineCapacity) params.set('engineCapacity', engineCapacity);
        if (equipment) params.set('equipment', equipment);

        router.push(`/?${params.toString()}`);
    }, [brand, engineCapacity, equipment, router, searchParams]);

    const resetFilters = () => {
        setBrand('');
        setEngineCapacity('');
        setEquipment('');
    };

    return (
        <aside className={styles.filterContainer}>
            <FilterSection
                setValue={setBrand}
                selectedValue={brand}
                title="Бренд"
                listFilter={BRAND_LIST}
            />
            <FilterSection
                setValue={setEngineCapacity}
                selectedValue={engineCapacity}
                title="Объем двигателя"
                listFilter={ENGINE_CAPACITY}
            />
            <FilterSection
                setValue={setEquipment}
                selectedValue={equipment}
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
