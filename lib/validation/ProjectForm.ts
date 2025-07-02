import {z} from "zod"

const imageSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 1 * 1024 * 1024, {
    message: "Each file must not exceed 1MB",
  })
  .refine(
    (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
    { message: "Only JPEG, PNG, or GIF files are allowed" }
  );

export const ProjectForm = z.object({
    name:z.string().min(5).max(50),

    category:z.array(z.string()).min(1,"Atleast one category is required"),


    image: z.instanceof(File)
    .refine((file) => file.size > 0, 'A display image file is required.')
    .refine(
      (file) => file.type.startsWith('image/'),
      ' File must be an image (jpg, png, etc.)'
    )
    .refine(
      (file) => file.size <= 1 * 1024 * 1024,
      'Image size must not exceed 1MB'
    ),

    images:z
      .array(imageSchema)
      .max(8, { message: "You cannot upload more than 8 images" }).optional().default([]),


    videoLink:z.string().max(100),
    githubLink:z.string().max(100),
    demoLink:z.string().max(100),
    description:z.string().min(10)
})