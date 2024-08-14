import React from "react";
// import { ProductForm } from "../components/product-form";
import { useCategoryList } from "../service/query/useCategoryList";
// import { useCreateProduct } from "../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { CategoryForm } from "../components/create-category-form/create-category-form";
import { useCreateCategory } from "../service/mutation/useCreateCategory";

export const CreateCategory = () => {
  const { data, isLoading } = useCategoryList();
  const { mutate } = useCreateCategory();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <div>
      {!isLoading && <CategoryForm categeoryData={data} submit={submit} />}
    </div>
  );
};
