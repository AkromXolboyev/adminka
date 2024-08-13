import { useQuery } from '@tanstack/react-query'
import { request } from '../../config/request'

export const useSingleCategory = (id) => {
  return useQuery({
    queryKey:["single",id],
    queryFn:()=>  request.get(`/category/${id}`).then((res)=> res.data )
    
  })
}
