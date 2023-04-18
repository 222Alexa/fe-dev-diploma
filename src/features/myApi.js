import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://netology-trainbooking.netoservices.ru/routes/",
  }),
  endpoints: (builder) => ({
    getCityesName: builder.query({
      query: (arg) => `cities?name=${arg}`,
      providesTags: (result, error, arg) => [
        { type: "dataSearchCityes", name: arg },
      ],
    }),
    getTrainsList: builder.query({
      query: (arg) => {
        const params = new URLSearchParams({
          from_city_id: arg.travelData.from.city._id,
          to_city_id: arg.travelData.to.city._id,

          offset: arg.parameters.offset,
          limit: arg.parameters.limit,
          sort: arg.parameters.sort.type,
        });
        if (arg.travelData.from.date)
          params.append("date_start", arg.travelData.from.date);
        if (arg.travelData.to.date)
          params.append("date_end", arg.travelData.to.date);

        return `?${params}`;
      },
      providesTags: (result, error, arg) => [
        { type: "dataSearchTrains", data: arg },
      ],
    }),
    getTrainId: builder.query({
      query: (arg) => `${arg}/seats`,
    }),
    getLastTickets: builder.query({
      query: () => `last`,
    }),
  }),
});

export const {
  useGetCityesNameQuery,
  useGetTrainsListQuery,
  useGetTrainIdQuery,
  useGetLastTicketsQuery,
} = api;
/* providesTags: (result, error, arg) => [{type: "dataSearchTrains", data: arg}],*/
/**    */
