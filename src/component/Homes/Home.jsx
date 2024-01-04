import React from "react";
import AddProduct from "../AddProducts/AddProduct";
import { useSelector } from "react-redux";
import ProductItem from "../../ProductItems/ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products);
  console.log(products.products);
  
  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-8">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
              {products.length ? (
                products.map((p, i) => {
                  return <ProductItem product={p} key={i} />;
                })
              ) : (
                <div>No Product Found</div>
              )}
            </div>
          </div>
                
          <div className="toast">
            <div className="alert alert-info bg-neutral text-white font-semibold">
              <span>New message arrived.</span>
            </div>
          </div>
          <div>
            <AddProduct />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
