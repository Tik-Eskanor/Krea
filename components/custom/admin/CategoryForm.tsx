"use client"
import { createCategory } from '@/lib/resource/category'
import { File } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useActionState } from 'react'
import { BiError } from 'react-icons/bi'


export default function CategoryForm() {
  const [state,formAction,isPending] = useActionState(createCategory,null)
  const router = useRouter()
  if(state?.success)
  {
    router.push("/dashboard/categories")
  }
  return (
   <div className="max-w-[700px] mx-auto shadow rounded p-5">
     <form action={formAction}>
        <div className='font-medium mb-2 text-gray-700'>Category Name</div>
        <input type="text" name='name' className='w-full p-2 rounded border border-gray-200 text-gray-700' placeholder='eg express, next ...'/>
        {state?.fieldErrors?.name && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14}/> {state?.fieldErrors?.name}</p>}
        <button className='px-5 py-2 cursor-pointer flex gap-1 bg-blue-800 hover:bg-blue-600 transition-all duration-300 ease-in-out text-white font-semibold rounded mt-5 items-center'>{isPending ? "Saving...":"Save"}<File size={15} /></button>
     </form> 
   </div>
  )
}
