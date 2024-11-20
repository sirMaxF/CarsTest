'use client'

import { useState } from 'react'
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

    const handleSearch = () => { };

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