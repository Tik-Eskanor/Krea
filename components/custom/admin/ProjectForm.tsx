"use client"

import { File, ImageIcon } from 'lucide-react'
import { useRef } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useState, useActionState } from 'react';
import { createProject } from '@/lib/resource/project';
import { BiError } from 'react-icons/bi'
import { useRouter } from 'next/navigation';


export default function ProjectForm({ categories }: { categories: Category[] | undefined }) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const inputMRef = useRef<HTMLInputElement>(null)

  const [state, formAction, isPending] = useActionState(createProject, null)

  const [description, setDescription] = useState("");

  function handleClick() {
    inputRef.current?.click()
  }
  function handleMultipleClick() {
    inputMRef.current?.click()
  }

  if (state?.success) {
    router.push(`/dashboard/projects/${state.data?.data._id}`)
  }

  return (
    <div className="max-w-[800px] mx-auto shadow rounded p-5">
      <form action={formAction}>
        <div className='mb-5'>
          <div className='font-medium mb-2 text-gray-700'>Name</div>
          <input type="text" name='name' className='w-full p-2 rounded border border-gray-200 text-gray-700' placeholder='eg ecomerce for shoes' required />
          {state?.fieldErrors?.name && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.name}</p>}
        </div>

        <div className='mb-5'>
          <div className='font-medium mb-2 text-gray-700'>Category</div>
          <select className='w-full p-2 rounded border !border-gray-200 text-gray-700 m-0' name='category' multiple>
            {categories?.map((item) => (
              <option value={item._id} key={item._id}>{item.name}</option>
            ))}
          </select>
          {state?.fieldErrors?.category && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.category}</p>}
        </div>

        <div className="flex gap-4 flex-wrap mb-5">
          <div>
            <div className='font-medium mb-2 text-gray-700'>Dsiplay Image</div>
            <input
              type="file" ref={inputRef}
              accept="image/*" name='image'
              className='hidden' />
            <div
              onClick={handleClick}
              className='px-4 flex gap-1 py-2 rounded bg-blue-600 cursor-pointer items-center font-medium shadow-md text-white'>Select image <ImageIcon /> </div>
          </div>

          <div>
            <div className='font-medium mb-2 text-gray-700'>Other Images</div>
            <input
              type="file" multiple
              accept="image/*" name='images'
              ref={inputMRef} className='hidden' />
            <div
              onClick={handleMultipleClick}
              className='px-4 flex gap-1 py-2 rounded bg-blue-600 cursor-pointer items-center font-medium shadow-md text-white'>Select images <ImageIcon /> </div>
          </div>
          <div className='w-full'>
            {state?.fieldErrors?.image && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.image}</p>}
            {state?.fieldErrors?.images && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.images}</p>}
          </div>
        </div>

        <div className='mb-5'>
          <div className='font-medium mb-2 text-gray-700'>Video Link</div>
          <input type="text" name='video-link' className='w-full p-2 rounded border border-gray-200 text-gray-700' placeholder='eg https://youtube.com/ecommerce' />
          {state?.fieldErrors?.videoLink && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.videoLink}</p>}
        </div>

        <div className='mb-5'>
          <div className='font-medium mb-2 text-gray-700'>Github Link</div>
          <input type="text" name='github-link' className='w-full p-2 rounded border border-gray-200 text-gray-700' placeholder='eg https://github.com/ecommerce' />
          {state?.fieldErrors?.githubLink && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.githubLink}</p>}
        </div>

        <div className='mb-5'>
          <div className='font-medium mb-2 text-gray-700'>Demo Link</div>
          <input type="text" name='demo-link' className='w-full p-2 rounded border border-gray-200 text-gray-700' placeholder='eg https://vercel.com/ecommerce' />
          {state?.fieldErrors?.demoLink && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.demoLink}</p>}
        </div>

        <div className='mb-5'>
          <div className='font-medium mb-2 text-gray-700'>Description</div>
          <MDEditor
            value={description}
            onChange={(value) => setDescription(value as string)}
          />
          <input type="hidden" name='description' value={description} />
          {state?.fieldErrors?.description && <p className='text-gray-700 mt-1 text-sm flex gap-1 items-center'><BiError size={14} /> {state?.fieldErrors?.description}</p>}
        </div>
        <button className='px-5 py-1 flex gap-1 cursor-pointer bg-blue-800 hover:bg-blue-600 transition-all duration-300 ease-in-out text-white font-semibold rounded mt-5 items-center'>{isPending ? "Saving..." : "Save"}<File size={15} /></button>
      </form>
    </div>
  )
}
