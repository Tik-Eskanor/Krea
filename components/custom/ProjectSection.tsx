"use client"

import React, { useState } from 'react'
import ProjectCard from '@/components/custom/ProjectCard';

export default function ProjectSection({ projects, categories }: { projects: Project[] | undefined, categories: Category[] | undefined }) {
    const [filteredArray, setFilteredArray] = useState(projects)

    function handleFilter(value: string) {
        const newArray: Project[] = []
        projects?.forEach(item => {
            for (let x = 0; x < item.category.length; x++) {
                if (item.category[x].name == value) {
                    newArray.push(item)
                }
            }
        });
        setFilteredArray(newArray)
        console.log(newArray)
    }

    return (
        <div className="flex mt-5">
            <div className="w-4/12 md:w-2/12 p-2">
                <div className="categories pb-3">
                    <div className="buttons">
                        <button
                            onClick={() => setFilteredArray(projects)}
                            className="active text-center min-w-[100px] md:min-w-[130px]">ALL</button>
                        {categories?.map((item) => (
                            <button
                                onClick={() => handleFilter(item.name)}
                                key={item._id} className="text-center capitalize min-w-[100px] md:min-w-[130px]">{item.name}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-10/12 w-8/12 rounded-md">
                <div className="flex flex-wrap">
                    {filteredArray?.map((item) => (
                        <div className="md:w-3/12 p-2" key={item._id}>
                            <ProjectCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
