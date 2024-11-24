'use client'

// данная страница является аналогом файла SearchBar-ServerSide лежащщего в той же директории
// разница только в том что pageServerSide реализует логику сервер-сайда в Nextjs

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

const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer === '' && searchModel === '') {
            return alert('Заполните данные формы!')
        }

        setModel(searchModel);
        setManufacturer(searchManufacturer);
    }

    return (
        <form className='searchbar flex gap-3' onSubmit={handleSearch}>
            {/* поиск по производителю */}
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
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
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
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
