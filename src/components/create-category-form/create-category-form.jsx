import React from "react";
import { useForm } from "react-hook-form";

export const CategoryForm = ({ submit,name,img , id}) => {
  const { register, handleSubmit } = useForm({
    defaultValues:{name,img,id}
  });

  return (
    <form onSubmit={handleSubmit(submit)}>
      
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
          placeholder="Img"
          className="w-full p-5 bg-blue-200"
          type="text"
          {...register("img")}
        />
      </div>
      <button
        type="submit"
        className="block w-full p-5 text-center text-white bg-cyan-700"
      >
        create category
      </button>
    </form>
  );
};
