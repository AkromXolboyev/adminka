import React from 'react'
import { useParams } from 'react-router-dom'

export const CategoryDetail = () => {
    const { id } = useParams();
    console.log(id);
    
    return (
        <div>CategoryDetail</div>
    )
}
