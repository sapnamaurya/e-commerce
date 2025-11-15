import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
// import OrderTraker from "./OrderTraker";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { useNavigate, useParams } from "react-router-dom";
import AddressCard from "../address/AdreessCard";
import OrderTraker from "./OrderTraker";
import { deepPurple } from "@mui/material/colors";
// import { deepPurple } from "@mui/material/colors";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
// import BackdropComponent from "../BackDrop/Backdrop";

const OrderDetails = () => {
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  // const { orderId } = useParams();
  // const { order } = useSelector((store) => store);

  // console.log("order", order.order);

  // useEffect(() => {
  //   dispatch(getOrderById(orderId));
  // }, []);

  // const navigate = useNavigate();
  return (
    <>
      <div className=" px:5 lg:px-20 ">
        <div>
          <p className="font-bold text-lg py-2">Delivery Address</p>
          <AddressCard />
        </div>

        <div className="py-20">
          <OrderTraker activeStep={3} />
        </div>
        <Grid className="space-y-5" container>
          {[1, 1, 1, 1, 1].map((item) => (
            <Grid
              item
              container
              className="shadow-xl rounded:md p-5 w-[100%] border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className=" flex items-center space-x-4">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70"
                    alt=""
                  />
                  <div className="space-y-2 ml-5">
                    <p className="font-semibold">fefergrgr</p>
                    <p className="space-x-5 opacity-50 text-xs font-semibold">
                      <span>Color: pink</span> <span>Size: m</span>
                    </p>
                    <p>Seller: copor buck</p>
                    <p>₹555 </p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorderIcon
                    sx={{ fontSize: "22px", marginRight: "2px" }}
                  />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
        {/* <Box className="p-5 shadow-lg border rounded-md">
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item xs={9}>
                <OrderTraker
                  activeStep={
                    order.order?.orderStatus === "PLACED"
                      ? 1
                      : order.order?.orderStatus === "CONFIRMED"
                      ? 2
                      : order.order?.orderStatus === "SHIPPED"
                      ? 3
                      : 5
                  }
                />
              </Grid>
              <Grid item>
                {order.order?.orderStatus === "DELIVERED" && (
                  <Button sx={{ color: "" }} color="error" variant="text">
                    RETURN
                  </Button>
                )}

                {order.order?.orderStatus !== "DELIVERED" && (
                  <Button sx={{ color: deepPurple[500] }} variant="text">
                    cancel order
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box> */}

        {/* <Grid container className="space-y-5">
            {order.order?.orderItems.map((item) => (
              <Grid
                container
                item
                className="shadow-xl rounded-md p-5 border"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item xs={6}>
                  {" "}
                  <div className="flex  items-center ">
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src={item?.product.imageUrl}
                      alt=""
                    />
                    <div className="ml-5 space-y-2">
                      <p className="">{item.product.title}</p>
                      <p className="opacity-50 text-xs font-semibold space-x-5">
                        <span>Color: pink</span> <span>Size: {item.size}</span>
                      </p>
                      <p>Seller: {item.product.brand}</p>
                      <p>₹{item.price} </p>
                    </div>
                  </div>
                </Grid>
                <Grid item>
                  {
                    <Box
                      sx={{ color: deepPurple[500] }}
                      // onClick={() =>
                      //   navigate(`/account/rate/${item.product._id}`)
                      // }
                      className="flex items-center cursor-pointer"
                    >
                      <StarIcon
                        sx={{ fontSize: "2rem" }}
                        className="px-2 text-5xl"
                      />
                      <span>Rate & Review Product</span>
                    </Box>
                  }
                </Grid>
              </Grid>
            ))}
          </Grid> */}
      </div>

      {/* <BackdropComponent open={order.loading} /> */}
    </>
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
