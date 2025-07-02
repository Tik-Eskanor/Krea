"use client"
import MDEditor from '@uiw/react-md-editor';
import Link from 'next/link';

export default function ProjectInfo({ projectData }: { projectData: Project | undefined }) {
    return (
        <div>
            <div className='px-3'>
                <div className='text-2xl text-slate-700 font-bold'>{projectData?.name}</div>
                <div className='mt-5'>
                    <MDEditor.Markdown source={projectData?.description} style={{ background: "transparent" }} />
                </div>
                <div className='mt-5'>
                    {projectData?.githubLink && <Link href={projectData?.githubLink} className='mb-3 text-blue-500 block font-semibold'>Githbub link</Link>}
                    {projectData?.demoLink && <Link href={projectData?.demoLink} className='mb-3 text-blue-500 block font-semibold'>Demo link</Link>}
                    {projectData?.videoLink && <Link href={projectData?.videoLink} className='mb-3 text-blue-500 block font-semibold'>Video link</Link>}
                </div>
            </div>
        </div>
    )
}
