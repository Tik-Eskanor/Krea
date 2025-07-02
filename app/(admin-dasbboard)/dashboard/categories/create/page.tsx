import CategoryForm from '@/components/custom/admin/CategoryForm'
import Header from '@/components/custom/admin/Header'
import React from 'react'

export default function page() {
  return (
    <>
     <Header title="Create new category"/>
     <div>
      <div className='px-5'>
        <div className="mt-10">
          <CategoryForm/>  
        </div> 
      </div>
     </div>
    </>
    
  )
}
