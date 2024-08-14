<<<<<<< HEAD:src/service/query/userCategoryList.js
  // import { useQuery } from "@tanstack/react-query";
  // import { request } from "../../config/request";
  // export const userCategoryList = () => {
  //   return useQuery({
  //     queryKey: ["category-list"],
  //     queryFn: () => request.get("/category").then((res) => res.data),
  //   });
  // };
=======
import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const useCategoryList = (page = 1) => {
  return useQuery({
    queryKey: ["category-list"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
>>>>>>> d7ad4ea103d9d7a4419878c257a23bbf4e89e29e:src/service/query/useCategoryList.js
