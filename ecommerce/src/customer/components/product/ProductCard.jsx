import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard m-3 w-[15rem] transition-all cursor-pointer">
      <div className="h-[16rem]">
        <img
          className="w-full h-full object-cover object-left-top"
          src={product.imageUrl}
          alt="ss"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="break-words">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">
            {"\u20B9"}
            {product.discountedPrice}
          </p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
