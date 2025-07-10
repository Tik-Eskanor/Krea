"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';

export default function ImageGridAdmin({ projectData }: { projectData: Project | undefined }) {

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className='flex justify-center gap-3 flex-wrap p-3 bg-gray-400 pswp-gallery' id="my-gallery">
            {projectData?.images.map((item) => (
                <a key={item._id}
                    href={item.url}
                    data-pswp-width="1024"
                    data-pswp-height="550"
                    className='basis-[47%] md:basis-[23%] block'>
                    <Image src={item.url || ""} alt='' className='w-full h-auto object-cover rounded-md border border-white' />
                </a>
            ))}
        </div>
    )
}
