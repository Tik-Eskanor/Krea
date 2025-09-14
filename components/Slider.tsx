"use client"
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import Link from 'next/link';
import { slideData } from '@/lib/data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Slider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

    return (
        <>
            <div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slideData.map((data) => (
                            // slid element
                            <div className="embla__slide max-w-[780px] px-5" key={data.id}>
                                <div className='relative'>
                                    <Image src={data.image} alt='slide' width={1000} height={1000} className='z-[-1] absolute w-full h-full left-0 top-0 rounded-2xl object-cover' />
                                    <div className="p-5">
                                        <span className='font-semibold text-[10px] text-gray-300 opacity-60'>{data.model}</span>
                                        <div className="text-5xl md:text-7xl font-bold text-center text-white mt-28">{data.title}</div>
                                        <div className="flex flex-wrap justify-between items-end mt-2 space-y-3">
                                            <div className='text-white mt-5 max-w-[380px] min-w-[300px]'>
                                                <div className="text-xl md:text-3xl">{data.subTitle}</div>
                                                <p className='text-[12px] md:text-[13px] text-gray-300 mt-2'>{data.description}</p>
                                            </div>
                                            <Link href="" className='px-3 py-2 font-medium text-sm rounded-full bg-white text-black'>Try {data.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            // -----------

                        ))}
                    </div>
                </div>

                <div className='grid  items-center'>
                    {/* pagination */}
                    <div className="flex justify-center justify-self-center mt-4 space-x-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-black' : 'bg-gray-400'}`}
                                onClick={() => scrollTo(index)}
                            ></button>
                        ))}
                    </div>

                    {/* buttons for next and previous slide */}
                    <div className='flex ml-auto gap-2 -mt-3 pr-5 md:pr-0'>
                        <button className="bg-gray-100 p-1 rounded-full cursor-pointer" onClick={scrollPrev}><IoIosArrowBack className='text-black' /></button>
                        <button className="bg-gray-100 p-1  rounded-full cursor-pointer" onClick={scrollNext}><IoIosArrowForward className='text-black' /></button>
                    </div>
                </div>
            </div>
        </>
    );
}


// "use client"
// import React, { useState, useEffect, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
// import Image from 'next/image';
// import Link from 'next/link';
// import { slideData } from '@/lib/data';

// export default function Slider() {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
//     const [selectedIndex, setSelectedIndex] = useState(0)
//     const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return
//         setSelectedIndex(emblaApi.selectedScrollSnap())
//     }, [emblaApi, setSelectedIndex])

//     useEffect(() => {
//         if (!emblaApi) return
//         onSelect()
//         setScrollSnaps(emblaApi.scrollSnapList())
//         emblaApi.on('select', onSelect)
//         emblaApi.on('reInit', onSelect)
//     }, [emblaApi, setScrollSnaps, onSelect])

//     const scrollTo = useCallback((index: number) => {
//         if (emblaApi) emblaApi.scrollTo(index)
//     }, [emblaApi])

//     const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
//     const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

//     return (
//         <>
//             <div className="embla">
//                 <div className="embla__viewport" ref={emblaRef}>
//                     <div className="embla__container">
//                         {slideData.map((data) => (
//                             <div className="embla__slide" key={data.id}>
//                                 <div className='relative'>
//                                     <Image src={data.image} alt='slide' width={1000} height={1000} className='w-full h-[350px] rounded-2xl object-cover' />
//                                     <div className="absolute w-full h-full left-0 top-0 p-5">
//                                         <span className='font-semibold text-[10px] text-gray-300 opacity-60'>{data.model}</span>
//                                         <div className="text-7xl font-bold text-center text-white mt-28">{data.title}</div>
//                                         <div className="flex justify-between items-end mt-2">
//                                             <div className='text-white mt-5 max-w-[380px]'>
//                                                 <div className="text-3xl ">{data.subTitle}</div>
//                                                 <p className='text-[13px] text-gray-300 mt-2'>{data.description}</p>
//                                             </div>
//                                             <Link href="" className='px-3 py-2 font-medium text-sm rounded-full bg-white text-black'>Try {data.title}</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="flex justify-center mt-4 space-x-2">
//                     {scrollSnaps.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-black' : 'bg-gray-400'}`}
//                             onClick={() => scrollTo(index)}
//                         ></button>
//                     ))}
//                 </div>
//                 <button className="embla__prev" onClick={scrollPrev}>Prev</button>
//                 <button className="embla__next" onClick={scrollNext}>Next</button>
//             </div>
//         </>
//     );
// }