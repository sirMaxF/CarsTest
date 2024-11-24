'use client'

import { SearchManufacturerProps } from '@/types'
import { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers =
        query === ''
            ? manufacturers
            : manufacturers.filter(item => (
                item
                    .toLowerCase()
                    .replace(/\s+/g, '') // убираем пробелы
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            ))


    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    {/* иконка формы */}
                    <ComboboxButton className='absolute top-[3px] '>
                        <Image
                            src='/globe.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='Car logo'
                        />
                    </ComboboxButton>

                    {/* сама форма */}
                    <ComboboxInput
                        className='search-manufacturer__input  pl-[38px]'
                        placeholder='Фольксваген'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    >
                    </ComboboxInput>

                    {/* выпадающий список */}
                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className="w-[220px] origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        {
                            filteredManufacturers.length === 0 && query !== ''
                                // если не находим совпадения среди списка опций
                                // то просто создаем опцию в виде напечатанной в форме строки
                                ? (
                                    <ComboboxOption
                                        value={query}
                                        className='data-[focus]:bg-blue-100'
                                    >
                                        {query}
                                    </ComboboxOption>
                                )

                                // если находим напечатанное совпадает с данными в опциях
                                // то рендерим список совпадений 
                                : (
                                    filteredManufacturers.map(item => (
                                        <ComboboxOption
                                            key={item}
                                            className={({ active }) => `relative ${active ? 'bg-lime-400 text-white' : 'text-gray-900'}`}
                                            value={item}
                                        >
                                            {item}
                                        </ComboboxOption>
                                    ))
                                )
                        }

                    </ComboboxOptions>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer