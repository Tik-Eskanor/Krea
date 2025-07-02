import {z}from "zod"

export const CategoryForm =  z.object({
    name:z.string().min(3).max(50)
})
