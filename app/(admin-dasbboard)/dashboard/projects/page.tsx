import Header from '@/components/custom/admin/Header'
import { getProjects } from '@/lib/resource/project'
import { Edit2Icon, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsEye } from 'react-icons/bs'

export default async function page() {
  const res = await getProjects()
  const data = res.data

  return (
    <>
      <Header title="Projects" />
      <div>
        <div className='px-5'>
          <div className="mt-6 mb-4 overflow-x-auto">
            {!res.success && <p className='text-lg text-gray-700 mb-2'>Sorry no data. Try adding some</p>}

            <table className='w-[100%] max-w-[100%]'>
              <thead className='bg-gray-50 dm-sans-500 text-[#4F5144] text-left'>
                <tr>
                  <th className='font-semibold py-[10px] pl-6'>Name</th>
                  <th className='font-semibold py-[10px] pl-6'>Demo Link</th>
                  <th className='font-semibold py-[10px] pl-6'>Github Link</th>
                  <th className='font-semibold py-[10px] pl-6'> </th>
                </tr>
              </thead>
              <tbody className='text-[#4F5144]'>
                {data?.map((item) => (
                  <tr className="hover:bg-gray-50 border-b border-gray-200" key={item._id}>
                    <td className='dm-sans-400 text-sm py-4 pl-6 capitalize'>{item.name}</td>
                    <td className='dm-sans-400 text-sm py-4 pl-6'>{item.videoLink ? item.videoLink : "..."}</td>
                    <td className='dm-sans-400 text-sm py-4 pl-6'>{item.githubLink ? item.githubLink : "..."}</td>
                    <td className='dm-sans-400 text-sm py-4 pl-6 flex gap-3'>
                      <Link href={`/dashboard/projects/${item._id}`}> <BsEye size={27} className='border cursor-pointer p-1 bg-blue-600 text-white rounded-md' /></Link>
                      <Edit2Icon size={27} className='border cursor-pointer p-1 bg-green-600 text-white rounded-md' />
                      <Trash2Icon size={27} className='border cursor-pointer p-1 bg-red-500 text-white rounded-md' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>

  )
}
