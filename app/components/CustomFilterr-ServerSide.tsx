'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const router = useRouter();
    const [selected, setSelected] = useState(options[0])

    const handleUpdateParams = (e: { type: string, value: string }) => {
        const newpathName = updateSearchParams(title, e.value.toLowerCase());
        router.push(newpathName);
    }

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams(e);
                }
                }>
                <div className="relative w-fit z-10">
                    <ListboxButton>
                        <span className='block truncate'>{selected.title}</span>
                        <Image
                            src='/down-arrow-svgrepo-com.svg'
                            alt='Подпись'
                            width={20}
                            height={20}
                            className='ml-4'
                        />
                    </ListboxButton>
                    <ListboxOptions>
                        {options.map(option => (
                            <ListboxOption
                                key={option.title}
                                value={option}
                                className={({ active }) => `relative cursos-default select-none py-2 px-4 ${active ? 'bg-cyan-400 text-white' : 'text-gray-900'}`}

                            >
                                {({ selected }) => (
                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                        {option.title}
                                    </span>
                                )}
                            </ListboxOption>
                        ))}

                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter