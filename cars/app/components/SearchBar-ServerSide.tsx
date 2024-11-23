'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src='/magnifying-glass-backup-svgrepo-com.svg'
            alt='Подпись'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && model === '') {
            return alert('Заполните данные формы!')
        }

        updateSearchParanms(model.toLowerCase(), manufacturer.toLowerCase());
    }

    // функция передачи параметров из форм в строку запроса
    const updateSearchParanms = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model);
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)


    };

    return (
        <form className='searchbar flex gap-3' onSubmit={handleSearch}>
            {/* поиск по производителю */}
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            {/* поиск по модели */}
            <div className="searchbar__item">
                <Image
                    src='/auto-automobile-automotive-svgrepo-com.svg'
                    alt='Подпись'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input
                    type="text"
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder='Model'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />

        </form>
    )
}

export default SearchBar