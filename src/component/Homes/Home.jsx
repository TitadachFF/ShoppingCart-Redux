import React from "react";
import AddProduct from "../AddProducts/AddProduct";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products);
  console.log(products.products);
  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-8">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-neutral">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-neutral">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-neutral">Buy Now</button>
              </div>
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
