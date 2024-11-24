import { CarProps } from "@/types";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from "next/image";


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            className=''
        >
            <div className="fixed inset-0 bg-black bg-opacity-25">
                <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5'>
                    {/* кнопка закрытия */}
                    <button type="button" className="absolute top-2 right-2 z-10 w-fit p-2 bg-sky-800 rounded-full" onClick={closeModal}>&#x2715;</button>


                    {/* картинки */}
                    {/* одно большое изобр */}
                    <div className="flex-1 flex-col flex gap-3">
                        <div className="relative w-full h-40 bg-cover bg-cent rounded-lg">
                            <Image src='https://i.sstatic.net/2tv51.png' fill priority alt='Подпись' className='object-contain' />
                        </div>

                        {/* три мелких изобр */}
                        <div className="flex gap-3">
                            <div className="flex gap-3 w-10">
                                <div className="flex-1 relative w-full h-24 bg-cyan-400">
                                    <Image src='/next.svg' fill priority alt='Подпись' className='object-contain' />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-1 relative w-full h-24 bg-cyan-400">
                                    <Image src='/next.svg' fill priority alt='Подпись' className='object-contain' />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-1 relative w-full h-24 bg-cyan-400">
                                    <Image src='/next.svg' fill priority alt='Подпись' className='object-contain' />
                                </div>
                            </div></div>
                    </div>

                    {/* содержимое диалогового окна */}

                    <div className="flex flex-1 flex-col gap-2">
                        <h2 className="font-semibold text-xl capitalize">
                            {car.make} {car.model}
                        </h2>

                        <div className="mt-3 flex flex-wrap gap-4">
                            {Object.entries(car).map(([key, value]) => (
                                <div key={key} className="flex justify-between gap-5 w-full text-right">
                                    <h4 className="text-grey capitalize">{key.split('_').join(' ')}</h4>
                                    <p className="text-black-100 font-semibold">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </DialogPanel>
            </div>


        </Dialog>
    )
}

export default CarDetails