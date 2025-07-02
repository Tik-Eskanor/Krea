import React from 'react'
import {SidebarTrigger } from "@/components/ui/sidebar"

export default function Header({title}:{title:string}) {
  return (
    <div className="border-b shadow-md">
      <div className='px-5'>
        <div className="flex justify-between py-5">
          <div className='flex gap-2 items-center'>
           <SidebarTrigger />
           <div className="text-2xl">{title}</div> 
          </div>
           <div className="toggle">
            Toggle
           </div>
        </div>
      </div>

    </div>
  )
}
