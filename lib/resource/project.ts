"use server"
import z from "zod"
import { ProjectForm } from "../validation/ProjectForm"


export const createProject = async (prevState: unknown, formData: FormData) => {
    try {

        const images = formData.getAll("images").filter((item) => item.name !== "undefined")
        const formValues = {
            name: formData.get("name"),
            category: formData.getAll("category"),
            image: formData.get("image"),
            images: images,
            videoLink: formData.get("video-link"),
            githubLink: formData.get("github-link"),
            demoLink: formData.get("demo-link"),
            description: formData.get("description")
        }

        // validate with zod
        const validatedData = await ProjectForm.parseAsync(formValues)

        const uploadFormData = new FormData();
        uploadFormData.append('name', validatedData.name);
        uploadFormData.append('category', JSON.stringify(validatedData.category));
        uploadFormData.append('image', validatedData.image);
        validatedData.images?.forEach((file) => {
            uploadFormData.append("images", file); // Multiple files
        });
        uploadFormData.append('videoLink', validatedData.videoLink);
        uploadFormData.append('githubLink', validatedData.githubLink);
        uploadFormData.append('demoLink', validatedData.demoLink);
        uploadFormData.append('description', validatedData.description);

        // console.log(uploadFormData)

        const res = await fetch(process.env.API_URL + "/project/create", {
            method: "POST",
            headers: {},
            body: uploadFormData
        })

        if (res.status !== 201) console.log(res)

        const resData: Promise<{ success: boolean, data: Project }> = await res.json()
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

export const getProjects = async () => {
    const res = await fetch(process.env.API_URL + "/project/all")

    if (res.status !== 200) console.log(res)

    const resData: Promise<{ success: boolean, data?: Project[], message?: string }> = res.json()
    const data = await resData
    return data
}


export const getProject = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/project/${id}`)

    if (res.status !== 200) console.log(res)

    const resData: Promise<{ success: boolean, data?: Project, message?: string }> = res.json()
    const data = await resData
    return data
}




