import React from "react";
import CartItem from "./CartItems";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  // Example data
  const items = [1, 1, 1, 1];
  const price = 2000;
  const discount = 400;
  const delivery = 0;
  const total = price - discount;

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          <div className="space-y-3">
            {items.map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className=" p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{price}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹{discount}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">
                  {delivery === 0 ? "Free" : `₹${delivery}`}
                </span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{total}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckOut}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
