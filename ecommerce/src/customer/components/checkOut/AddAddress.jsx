import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { createOrder } from "../../../Redux/Customers/Order/Action";
// import userEvent from "@testing-library/user-event";
import AddressCard from "../address/AdreessCard";
// import { useState } from "react";

export default function AddAddressForm() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  // const { auth } = useSelector((store) => store);
  // const [selectedAddress, setSelectedAdress] = useState(null);

  // console.log("auth", auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
  };
  //   dispatch(createOrder({ address, jwt, navigate }));
  //   // after perfoming all the opration
  //   handleNext();
  // };

  // const handleCreateOrder = (item) => {
  //   dispatch(createOrder({ address:item, jwt, navigate }));
  //   handleNext();
  // };

  return (
    <div className="w-full flex gap-6 items-start">
      {/* LEFT SECTION */}
      <div className="w-[35%]">
        <Box className="rounded-md shadow-md h-[32rem] overflow-y-scroll w-full">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2 }}
              size="large"
              variant="contained"
              color="primary"
            >
              Delivered Here
            </Button>
          </div>
        </Box>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[65%]">
        <Box className=" rounded-md shadow-md p-5 w-full">
          <form onSubmit={handleSubmit}>
            <Grid className="grid grid-cols-2 md:grid-cols-2 gap-6" spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                />
              </Grid>

              <Grid container spacing={2} sx={{ width: "100%" }}>
                <TextField
                  required
                  name="address"
                  label="Address"
                  fullWidth
                  multiline
                  rows={4}
                  columns={7}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField required name="city" label="City" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: "20px" }}>
              <Button
                sx={{ padding: ".9rem 1.5rem" }}
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Delivered Here
              </Button>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
}
