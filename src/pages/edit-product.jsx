import React from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
// import {userSingleData} from "../service/query/userSingleData"
// import { useEditTodo } from "./service/useEditTodo";
import { ProductForm } from "../components/product-form";
import { userSingleData } from "../service/query/userSingleData";
import { useEditProduct } from "../service/mutation/useEditProduct";

export const EditProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { data, isLoading } = userSingleData(id);
  const { mutate } = useEditProduct(id);
  const submit = (value) => {
    mutate(value,{
      onSuccess:()=> {
        navigate(-1)
      },
    })
  };

  return (
    <>{isLoading ? <h1>loading...</h1> : <ProductForm submit={submit} {...data} />}</>
  );
};
