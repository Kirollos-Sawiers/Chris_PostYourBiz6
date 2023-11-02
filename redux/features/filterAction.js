import { createAsyncThunk } from "@reduxjs/toolkit";

export const filterBusinesses = createAsyncThunk(
  "filter/businesses",
  async ({ state, city, zip }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/filter-business-website-request/${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ state, city, zip }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log({ error });
    }
  }
);
