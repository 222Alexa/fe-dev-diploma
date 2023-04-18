import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const other = createApi({
  reducerPath: "other",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://netology-trainbooking.netoservices.ru/",
  }),
  endpoints: (builder) => ({
    getSubscribe: builder.mutation({
      queryFn: async (data) => {
        console.log(data, 'data')
        const { email, ...body } = data;
        try {
          let response = await fetch(`subscribe?email=${email}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(response, 'response')
        } catch {
          console.log("error");
        }
      },
    }),
  }),
});

export const { useGetSubscribeQuery } = other;
