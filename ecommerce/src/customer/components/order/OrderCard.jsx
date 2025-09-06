import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  // const navigate = useNavigate();
  console.log("items ", item);
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            // onClick={() => navigate(`/account/order/${order?._id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">fefergrgr</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: m</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹555</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <p className="space-y-2 font-semibold">
              <span>Delivered On Mar 03</span>
            </p>
          )}
          {false && (
            <p className="space-y-2 font-semibold">
              <span>expected Delivered On Mar 03</span>
            </p>
          )}

          <>
            <AdjustIcon
              sx={{ width: "15px", height: "15px" }}
              className="text-green-600 p-0 mr-2 text-sm"
            />
            <span>Expected Delivery On Mar 03</span>
          </>

          {/* <p className="text-xs">Your Item Has Been Delivered</p>
          {item.orderStatus === "DELIVERED" && (
            <div
              onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )} */}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
