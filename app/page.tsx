import Slider from '@/components/Slider'
import { featuresData } from '../lib/data'
import Link from 'next/link'
import { MdLibraryBooks } from 'react-icons/md'
import { FaCreditCard } from 'react-icons/fa6'

export default function page() {
    return (
        <>
            <section className='mt-20 relative'>
                <Slider />
            </section>

            <section className='mt-10 px-5 mb-5'>
                <div className="font-semibold">Generate</div>
                <div className="flex flex-wrap justify-between ">
                    {featuresData.map((data) => {
                        const Icon = data.icon
                        return (
                            <div key={data.id} className='basis-[100%] md:basis-[24.5%] flex items-center justify-between p-2'>
                                <div className='flex gap-2 justify-center items-start mb-3'>
                                    <div className={`p-[10px] rounded-xl ${data.color}`}><Icon size={23} className='text-white' /></div>
                                    <div>
                                        <div className='text-base md:text-sm font-semibold'>{data.title}</div>
                                        <div className='text-sm md:text-[12px] max-w-[170px]'>{data.description}</div>
                                    </div>
                                </div>
                                <Link href="" className='inline-block rounded-xl px-4 py-1 text-black text-xs bg-gray-100'>Open</Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section>
                <div className="flex justify-between px-5 mb-2">
                    <div className="font-semibold">Gallery</div>
                    <div className='flex gap-2'>
                        <Link href="" className='bg-secondary px-2 py-[5px] text-sm rounded-lg flex gap-1 font-medium items-center'><MdLibraryBooks size={20} /> Gallery</Link>
                        <Link href="" className='bg-secondary px-2 py-[5px] text-sm rounded-lg flex gap-1 font-medium items-center'><FaCreditCard size={20} /> Support</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
