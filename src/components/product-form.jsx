import React from "react";
import { useForm } from "react-hook-form";

export const ProductForm = ({ submit, categeoryData,img,name,price,id ,categoryId}) => {
  const { register, handleSubmit } = useForm({
    defaultValues:{img,name,price,id,categeoryData,categoryId}
  });

  return (
    <form className="p-10 bg-white shadow-md shadow-violet-500 max-w-screen-md mx-auto" onSubmit={handleSubmit(submit)}>
      <div className="mb-4">
        <select className="w-full p-5 bg-blue-200" {...register("categoryId")}>
          {categeoryData?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          placeholder="Name"
          className="w-full p-5 bg-blue-200"
          type="text"
          {...register("name")}
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="price"
          className="w-full p-5 bg-blue-200"
          type="number"
          {...register("price")}
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="Img"
          className="w-full p-5 bg-blue-200"
          type="text"
          {...register("img")}
        />
      </div>
      <button
        type="submit"
        className="block max-w-md mx-auto maw w-full p-5 text-center text-white bg-cyan-700"
      >
        send
      </button>
    </form>
  );
};
