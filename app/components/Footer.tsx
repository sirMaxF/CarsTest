import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants';

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image
                        src='/next.svg'
                        alt='Подпись'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                    <p className='text-base text-gray-700'> Lorem, ipsum dolor. &copy;</p>
                </div>

                {/* ссылки  */}
                <div className="footer__links flex gap-10 flex-wrap">
                    {footerLinks.map(link => (
                        <div key={link.title} className="link__title flex flex-col text-lg">
                            <h3 className='font-bold'>{link.title}</h3>
                            {
                                link.links.map(item => (
                                    <Link
                                        key={item.title}
                                        href={item.url}
                                        className='text-gray-500'
                                    >{item.title}</Link>
                                ))
                            }
                        </div>
                    ))}
                </div>

            </div>


            {/* копирайт */}

            <div className='flex justify-between items-center flex-wrap mt-10 border-t bg-gray-100 sm:px-16 px-6 py-10'>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="footer__copyright-links flex">
                    <Link href={'/'} className='text-gray-500'>Lorem, ipsum.</Link>
                    <Link href={'/'} className='text-gray-500'>Lorem, ipsum.</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer