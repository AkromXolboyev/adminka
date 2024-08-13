import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSingleCategory } from '../service/query/useSingleCategory'
import { useEditCategory } from '../service/mutation/useEditCategory'
import { CategoryForm } from '../components/create-category-form/create-category-form'

export const EditCategory = () => {
    const {id} = useParams()
    const {data,isLoading} = useSingleCategory(id)
    const {mutate} = useEditCategory(id)
    const navigate = useNavigate()

    const editcategory = (val)=>{
        mutate(val,{
            onSuccess:()=> {
                navigate(-1)
            }
        })
    }
  return (
    <>
        {isLoading ? <h1>loading</h1> : <CategoryForm submit={editcategory} {...data} />}
    </>
  )
}
