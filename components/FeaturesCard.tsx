
import React, from 'react'

type FeaturesData = {
    title: string,
    description: string,
    icon: any,
    color: string
}
export default function FeaturesCard({ title, description, icon, color }: FeaturesData) {
    const Ico = icon
    return (
        <div>
            <Ico />
        </div>
    )
}
