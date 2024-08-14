import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { Icon1 } from "../assets/icon1";
import { Search } from "../components/search";
import { Icon2 } from "../assets/icon2";
import { Icon3 } from "../assets/icon3";
import { Icon4 } from "../assets/icon4";
export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
<<<<<<< HEAD
    <div>
      
=======
    <div className="mb-5">
      <h1 className="w-full h-[80px] bg-slate-50 pl-[290px] flex justify-between  ">
        <div>
          <h2 className="font-bold text-[23px]">Товары</h2>
          <h3 className="font-semibold text-[18px] text-[#B5B5C3]">Главная  /  Товары</h3>
        </div>
        <button className="font-bold text-[18px] mr-[100px] w-[120px] rounded-md bg-slate-200 ">Выйти</button>
      </h1>
      <div className="flex">
        <div className="h-screen bg-blue-500 p-[20px] w-[100px] shadow-md top-10 z-20">
          <div className="pb-6 pt-12">
            <Link to={"/"} className="text-3xl"> <Icon1 /> </Link>
          </div>
          <div className="pb-6">
            <Link to={"/category-list"} className="text-3xl"><Icon2 /></Link>
          </div>
          <div className="pb-6">
            <Link to={"/category-all"} className="text-3xl"> <Icon3 /> </Link>
          </div>
          <div className="pb-6">
            <Link to={"/create-new"} className="text-3xl"><Icon4 /></Link>
          </div>
        </div>
        <div className="w-full flex-grow-1 p-7">
          <Search />
          <Outlet />
        </div>
      </div>
>>>>>>> d7ad4ea103d9d7a4419878c257a23bbf4e89e29e
    </div>
    // <div className="flex">
    //   <div className="h-screen bg-blue-500 p-[20px] w-[300px]">
    //     <div className="pb-6">
    //       <Link to={"/"} className="text-3xl">Home</Link>
    //     </div>
    //     <div className="pb-6">
    //       <Link to={"/category-list"} className="text-3xl">Category list</Link>
    //     </div>
    //     {/* <div className="pb-6">
    //       <Link to={"/category-list"} className="text-3xl">Product list</Link>
    //     </div>
    //     <div className="pb-6">
    //       <Link to={"/category-list"} className="text-3xl">About adds</Link>
    //     </div> */}
    //   </div>
    //   <div className="w-full flex-grow-1 p-7">
    //     <Outlet />
    //   </div>
    // </div>
  );
};
