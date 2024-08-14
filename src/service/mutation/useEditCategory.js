import { useMutation } from '@tanstack/react-query'
import { request } from '../../config/request'

export const useEditCategory = (id) => {
  return useMutation({
    mutationFn:(data) => {
        request.put(`/category/${id}`,data).then((res)=> res.data)
    }
  })
}
