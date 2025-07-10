import { getProject } from '@/lib/resource/project'
import Image from 'next/image'
import ProjectInfo from '@/components/custom/admin/ProjectInfo';
import ImageGrid from '@/components/custom/ImageGrid';

type Param = {
    params: Promise<{ id: string }>
}
export default async function page({ params }: Param) {
    const id = (await params).id
    const data = await getProject(id)
    const projectData = data.data

    return (
        <section className='relative overflow-hidden'>
            <div className="absolute bg-gray-50 w-[550px] h-[550px] rounded-full border-2 border-gray-100 z-[-1] -top-70 -right-70 "></div>
            <div className="absolute bg-gray-50 w-[550px] h-[550px] rounded-full border-2 border-gray-100 z-[-1] -bottom-70 -left-70 "></div>
            <div className='container px-2 mx-auto'>
                <div className="flex gap-5 flex-wrap md:flex-nowrap my-5">
                    <ImageGrid projectData={projectData} />
                    <div className="w-full md:w-6/12">
                        <ProjectInfo projectData={projectData} />
                    </div>
                </div>
            </div>
        </section>
    )
}
