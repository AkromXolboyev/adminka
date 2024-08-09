import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex">
      <div className="h-screen bg-blue-500 p-[20px] w-[300px]">
        <div className="pb-6">
          <Link to={"/"} className="text-3xl">Home</Link>
        </div>
        <div className="pb-6">
          <Link to={"/category-list"} className="text-3xl">Category list</Link>
        </div>
        {/* <div className="pb-6">
          <Link to={"/category-list"} className="text-3xl">Product list</Link>
        </div>
        <div className="pb-6">
          <Link to={"/category-list"} className="text-3xl">About adds</Link>
        </div> */}
      </div>
      <div className="w-full flex-grow-1 p-7">
        <Outlet />
      </div>
    </div>
  );
};
