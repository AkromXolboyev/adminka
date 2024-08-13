import React from "react";
import { useCategoryList } from "../service/query/useCategoryList";
import { CategoryCard } from "../components/category-card";
import { Link, useParams } from "react-router-dom";

export const CategoryList = () => {
  const {id} = useParams()
  const { data } = useCategoryList(id);
  return (
    <div>
      <Link to={"/create-category"} className="">
          
      <button className="p-4 bg-slate-300 rounded-md">Create Category</button>
        </Link>
      {data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};
