import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const useCategoryAll = (page = 1) => {
  return useQuery({
    queryKey: ["category-all",page],
    queryFn: () => request.get("/products",{
      params:{
        _page:page,
       _limit:3,
      }
     }).then((res) =>{
     
      
      return {
        data:res.data ,
        pagesize:res.headers.get("X-Total-Count")
      }
      
    }),
  });
};
