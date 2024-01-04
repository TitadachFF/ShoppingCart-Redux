import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { removeQuantity } from "../redux/products/action";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, imageURL, name, category, price, quantity } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
  };

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="relative ">
        <img src={imageURL} alt={name} className="h-80 w-[300px] rounded-md"  />
        <div className="badge badge-secondary absolute top-3 right-3">
          {category}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          accusamus optio laborum commodi quae perspiciatis eligendi rerum.
        </p>

        <div className="flex justify-between">
          <p className="w-full">Available"{quantity}</p>
          <p className="text-left">{price}&</p>
        </div>
        <div className="card-action mt-2 ">
          <button
            className="btn btn-sm btn-primary shadow-lg shadow-blue-700/70"
            disabled={quantity === 0}
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
