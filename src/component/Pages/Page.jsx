import React from "react";
import { useSelector } from "react-redux";
import Home from "../Homes/Home";
import MyCart from "../MyCarts/MyCart";
const Page = () => {
  const page = useSelector((state) => state.pages);
  // const page = {home : false};
  return <div>{page.home ? <Home /> : <MyCart />}</div>;
};

export default Page;
