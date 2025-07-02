"use client"
import MDEditor from '@uiw/react-md-editor';
import Link from 'next/link';

export default function ProjectInfoTable({ projectData }: { projectData: Project | undefined }) {
    return (
        <div>
            <table className='w-full'>
                <tbody>
                    <tr className='hover:bg-gray-100 border-b border-gray-100'>
                        <th className='text-left py-4 text-slate-700 text-nowrap pr-5 pl-2'>Name</th>
                        <td className='py-4 text-slate-700'>{projectData?.name}</td>
                    </tr>
                    <tr className='hover:bg-gray-100 border-b border-gray-100'>
                        <th className='text-left py-4 text-slate-700 text-nowrap pr-5 pl-2'>Category</th>
                        <td className='py-4 text-slate-700'>
                            {projectData?.category.map((item) => (
                                <span key={item._id} className='px-1 uppercase font-semibold'>{item.name}</span>
                            ))}
                        </td>
                    </tr>
                    <tr className='hover:bg-gray-100 border-b border-gray-100'>
                        <th className='text-left py-4 text-slate-700 text-nowrap pr-5 pl-2'>Gethub Link</th>
                        <td className='py-4  text-blue-500'> <Link href={projectData?.githubLink || ""}>{projectData?.githubLink ? projectData.githubLink : "..."}</Link></td>
                    </tr>
                    <tr className='hover:bg-gray-100 border-b border-gray-100'>
                        <th className='text-left py-4 text-slate-700 text-nowrap pr-5 pl-2'>Demo Link</th>
                        <td className='py-4  text-blue-500'> <Link href={projectData?.demoLink || ""}>{projectData?.demoLink ? projectData.demoLink : "..."}</Link></td>
                    </tr>
                    <tr className='hover:bg-gray-100 border-b border-gray-100'>
                        <th className='text-left py-4 text-slate-700 text-nowrap pr-5 pl-2'>Video Link</th>
                        <td className='py-4  text-blue-500'> <Link href={projectData?.videoLink || ""}>{projectData?.videoLink ? projectData.videoLink : "..."}</Link></td>
                    </tr>
                    <tr className='hover:bg-gray-100 border-b border-gray-100'>
                        <th className='text-left py-4 text-slate-700 text-nowrap pr-5 pl-2'>Description</th>
                        <td className='py-4 text-slate-700 px-2'>
                            <MDEditor.Markdown source={projectData?.description} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
