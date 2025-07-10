import { getProject } from '@/lib/resource/project'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image'
import ProjectInfoTable from '@/components/custom/admin/ProjectInfoTable';
import ImageGridAdmin from '@/components/custom/ImageGridAdmin';

type Param = {
    params: Promise<{ id: string }>
}

export default async function page({ params }: Param) {
    const id = (await params).id
    const data = await getProject(id)
    const projectData = data.data

    if (!data.success) {
        return notFound()
    }

    return (
        <div className='container mx-auto px-2'>
            <div className="my-8">
                <div className="w-full md:w-8/12 mx-auto shadow-md rounded-2xl">
                    <div className="bg-gray-100 px-4 py-3 rounded-tr-2xl rounded-tl-2xl">
                        <Image src={projectData?.image.url || ""} alt='' width={1000} height={1000} />
                    </div>
                    {projectData?.images.length ? (
                        <ImageGridAdmin projectData={projectData} />
                    ) : ""}

                    <div className="">
                        <ProjectInfoTable projectData={projectData} />
                        <div className='flex justify-center py-6'>
                            <Link href="/dashboard/projects" className='px-4 py-2 text-sm rounded bg-slate-900 flex gap-2 text-white items-center'>BACK <BsArrowRight /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
