import Image from 'next/image'
import React from 'react'
// import { IoEyeOutline } from "react-icons/io5";

export default function ProjectCard(card: Project) {
  return (
    <div>
      <a href={`/project/${card._id}`}>
        <div className="project-item mb-4">
          <div className="img">
            <Image src={card.image.url} className="w-full" width={500} height={500} alt="" />
          </div>
          <div className="py-4 px-3">
            <h4 className="text-uppercase title">{card.name}</h4>
            {/* <div className="flex justify-between items-center my-3">
              <div className="text-sm text-gray-500">tgrt</div>
              <div className="min-w-10 flex  py-1 px-2 text-xs rounded-full bg-gray-300 font-semibold items-center gap-2"><IoEyeOutline className='inline text-blue-700' size={13} /> <span>{134}</span> </div>
            </div> */}
          </div>
        </div>
      </a>
    </div>
  )
}
