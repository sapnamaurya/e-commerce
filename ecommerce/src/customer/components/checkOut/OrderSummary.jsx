import React from "react";
import { Badge, Button } from "@mui/material";
import AddressCard from "../address/AdreessCard";
import CartItem from "../cart/CartItems";
// import { useLocation, useNavigate } from "react-router-dom";
// import CartItem from "../Cart/CartItem";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
// import AddressCard from "../adreess/AdreessCard";
// import { createPayment } from "../../../Redux/Customers/Payment/Action";

const OrderSummary = () => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  // const orderId = searchParams.get("order_id");
  // const dispatch=useDispatch();
  //   const jwt=localStorage.getItem("jwt");
  //   const {order}=useSelector(state=>state)

  // console.log("orderId ", order)

  // useEffect(()=>{

  //   dispatch(getOrderById(orderId))
  // },[orderId])

  // const handleCreatePayment=()=>{
  //   const data={orderId:order.order?._id,jwt}
  //   dispatch(createPayment(data))
  // }

  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard />
      </div>
      <div className="">
        <div className="lg:grid grid-cols-3 lg:px-16 relative-2">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {[1, 1, 1, 1].map((item) => (
                <CartItem />
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price </span>
                  <span>₹</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹</span>
                </div>
              </div>

              <Button
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
    </div>
  );
};

export default OrderSummary;
