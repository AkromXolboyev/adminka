import React from "react";
import { request } from "../config/request";
import { useDeleteProduct } from "../service/mutation/useDeleteProduct";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ id, name, img, price, categoryId }) => {
  const navigate = useNavigate()
  const {mutate} = useDeleteProduct(id)
  const deleteItem = async () => {
    mutate(id, {
      onSuccess:()=> {
        console.log("deleted prod");
        
      }
    })
  };
 
  
  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div className="">
        <img src={img} alt="img" />
        <h2 className="font-bold">{name}</h2>
        <strong>{price}</strong>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={deleteItem} className="p-4 bg-slate-400 w-[100px] rounded-md">
          Delete
        </button>
        <button onClick={()=> navigate(`/edit-product/${id}`)} className="p-4 bg-slate-400 w-[100px] rounded-md">Edit</button>
      </div>
    </div>
  );
};
