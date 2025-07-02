import { getProject } from '@/lib/resource/project'
import Image from 'next/image'
import ProjectInfo from '@/components/custom/admin/ProjectInfo';

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
                    <div className="w-full md:w-6/12">
                        {projectData?.videoLink ? (
                            <div>
                                <iframe width="100%" height="300px" id="video" src={projectData.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                {projectData?.images.length ? (
                                    <div className='flex justify-center gap-3 flex-wrap p-3 bg-gray-400'>
                                        {projectData?.images.map((item) => (
                                            <div key={item._id} className='basis-[47%] md:basis-[23%]'>
                                                <Image src={item.url || ""} alt='' width={1000} height={1000} className='w-full object-cover rounded-md border border-white' />
                                            </div>
                                        ))}
                                    </div>
                                ) : ""}
                            </div>
                        ) : (
                            <div>
                                <Image src={projectData?.image.url || ""} alt='' width={1000} height={1000} className='w-full' />
                                {projectData?.images.length ? (
                                    <div className='flex justify-center gap-3 flex-wrap p-3 bg-gray-400'>
                                        {projectData?.images.map((item) => (
                                            <div key={item._id} className='basis-[47%] md:basis-[23%]'>
                                                <Image src={item.url || ""} alt='' width={1000} height={1000} className='w-full object-cover rounded-md border border-white' />
                                            </div>
                                        ))}
                                    </div>
                                ) : ""}
                            </div>
                        )}

                    </div>
                    <div className="w-full md:w-6/12">
                        <ProjectInfo projectData={projectData} />
                    </div>
                </div>
            </div>
        </section>
    )
}
