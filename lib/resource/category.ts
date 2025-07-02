"use server"

import z from "zod"
import { CategoryForm } from "../validation/CategoryForm"


export const createCategory = async (prevState: unknown, formData: FormData) => {
  try {

    const formValues = {
      name: formData.get("name")
    }
    const validatedData = await CategoryForm.parseAsync(formValues)

    const res = await fetch("http://localhost:4000/api/category/create", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(validatedData)
    }
    )

    if (res.status !== 201) console.log(res)

    const resData: Promise<{ success: boolean, data: Category }> = await res.json()
    const data = await resData
    return { success: true, data }

  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors
      return { success: false, fieldErrors }
    }
    else {
      console.log(error)
      throw new Error("Something went wrong")
    }
  }
}

export const getCategories = async () => {
  const res = await fetch("http://localhost:4000/api/category/all", { next: { revalidate: 10 } })

  if (res.status !== 200) console.log(res)

  const resData: Promise<{ success: boolean, data?: Category[], message?: string }> = res.json()
  const data = await resData
  return data
} 