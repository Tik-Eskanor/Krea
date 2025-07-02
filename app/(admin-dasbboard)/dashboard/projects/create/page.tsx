import Header from '@/components/custom/admin/Header'
import ProjectForm from '@/components/custom/admin/ProjectForm'
import { getCategories } from '@/lib/resource/category'

export default async function page() {
  const res = await getCategories()
  const data = res.data

  return (
    <>
      <Header title="Create new project" />
      <div>
        <div className='px-5'>
          <div className="my-10">
            <ProjectForm categories={data} />
          </div>
        </div>
      </div>
    </>

  )
}
