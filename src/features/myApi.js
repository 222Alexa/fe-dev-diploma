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
        //console.log(arg, "trainParameters");
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
        for (let key in arg.trainsParameters) {
          if (arg.trainsParameters[key] === true) {
            params.append(key, arg.trainsParameters[key]);
          } else if (key.includes("price")) {
            // console.log(key, 99, arg.trainsParameters[key]);
            if (
              arg.trainsParameters[key] !== 500 ||
              arg.trainsParameters[key] !== 9000
            )
              params.append(key, arg.trainsParameters[key]);
          } else if (key.includes("start")) {
            if (
              arg.trainsParameters[key] !== 0 ||
              arg.trainsParameters[key] !== 24
            )
            params.append(key, arg.trainsParameters[key]);
          }
        }
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
