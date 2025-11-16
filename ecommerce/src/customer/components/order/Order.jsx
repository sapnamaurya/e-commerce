import { Box, Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="w-full">
      <Grid container spacing={4} className="px-5 lg:px-20">
        {/* LEFT FILTER PANEL */}
        <Grid item xs={12} md={3} className="w-[23%]">
          <div className="w-full shadow-lg bg-white p-5 sticky top-5 rounded-md">
            <h1 className="font-bold text-lg">Filters</h1>

            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultValue={option.value}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                  />
                  <label className="ml-3 text-sm text-gray-600">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* RIGHT ORDER LIST FULL WIDTH */}
        <Grid item xs={12} md={9} className="w-[73%]">
          <Box className="space-y-5 w-full">
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <OrderCard key={index} />
            ))}

            {/* If API data: */}
            {/* order.orders?.map((order) =>
              order.orderItems.map((item) => (
                <OrderCard item={item} order={order} />
              ))
            ) */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
