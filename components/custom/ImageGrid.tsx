"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';

export default function ImageGrid({ projectData }: { projectData: Project | undefined }) {

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
        <div className="w-full md:w-6/12">
            {projectData?.videoLink ? (
                <div>
                    <iframe width="100%" height="300px" id="video" src={projectData.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {projectData?.images.length ? (
                        <div className='flex justify-center gap-3 flex-wrap p-3 bg-gray-400 pswp-gallery' id="my-gallery">
                            {projectData?.images.map((item) => (
                                <a key={item._id}
                                    href={item.url}
                                    data-pswp-width="100%"
                                    // data-pswp-height="750"
                                    target="_blank"
                                    className='basis-[47%] md:basis-[23%] block'>
                                    <img src={item.url || ""} alt='' className='w-full object-cover rounded-md border border-white' />
                                </a>
                            ))}
                        </div>
                    ) : ""}
                </div>
            ) : (
                <div>
                    <Image src={projectData?.image.url || ""} alt='' width={1000} height={1000} className='w-full' />
                    {projectData?.images.length ? (
                        <div className='flex justify-center gap-3 flex-wrap p-3 bg-gray-400 pswp-gallery' id="my-gallery">
                            {projectData?.images.map((item) => (
                                <a key={item._id}
                                    href={item.url}
                                    data-pswp-width="1024"
                                    data-pswp-height="768"
                                    target="_blank"
                                    className='basis-[47%] md:basis-[23%] block'>
                                    <Image src={item.url || ""} alt='' width={1000} height={1000} className='w-full object-cover rounded-md border border-white' />
                                </a>
                            ))}
                        </div>
                    ) : ""}
                </div>
            )}

        </div>
    )
}
