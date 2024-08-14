import React from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../config/request"; // Assuming this is your Axios instance
import { useDeleteCategory } from "../service/mutation/useDeleteCategory";

export const CategoryCard = ({ id, name, img }) => {
  const {mutate} = useDeleteCategory(id)
  const deleteItem = () => {
    console.log(id);
    
    mutate(id, {
      onSuccess: () =>{
        console.log("lorem");
        
      }
    })
  };

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-2 shadow-md">
      <div className="flex items-center">
        <img className="w-[170px]" src={img} alt="img" />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="p-4 bg-slate-300 rounded-md"
        >
          Show Product
        </button>
        <button onClick={deleteItem} className="p-4 bg-slate-300 rounded-md">
          Delete
        </button>
        <button
          onClick={() => navigate(`/edit-category/${id}`)}
          className="p-4 bg-slate-300 rounded-md"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
