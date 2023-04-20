import { createSlice } from "@reduxjs/toolkit";

const catalogTrainsSlice = createSlice({
  name: "catalogTrains",
  initialState: {
    id: "",

    searchData: {
      travelData: {
        from: { date: null, city: { _id: "", name: "" } },
        to: { date: null, city: { _id: "", name: "" } },
      },
      parameters: {
        sort: { type: "date", text: "времени" },
        limit: 5,
        offset: 0,
      },
      trainsParameters: {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: false,
        have_air_conditioning: false,
        have_express: false,
        price_from: 500,
        price_to: 9000,
        start_departure_hour_from: false, //Час отбытия от (число)
        start_departure_hour_to: false, //Час отбытия до (число)
        start_arrival_hour_from: false, //Час прибытия от (число)
        start_arrival_hour_to: false, //Час прибытия до (число)
        end_departure_hour_from: false, //Час отбытия назад от (число)
        end_departure_hour_to: false, //Час отбытия назад до (число)
        end_arrival_hour_from: false, //Час прибытия назад от (работает при установленном параметре date_end)
        end_arrival_hour_to: false, //Час прибытия назад до (работает при установленном параметре date_end)
      },
    },
    seletedTrain: {},
    dataWagons: {},
  },
  reducers: {
    setDataRequest: (state, action) => {
      const { data } = action.payload;
      state.searchData.travelData = data;
    },
    setParameters: (state, action) => {
      const { sort, limit, offset } = action.payload;

      if (sort) state.searchData.parameters.sort = sort;
      if (limit) state.searchData.parameters.limit = limit;
      if (offset >= 0) state.searchData.parameters.offset = offset;
    },
    setTrainsParameters: (state, action) => {
      const { data } = action.payload;
      console.log(data, "dataOptions");
      if (data.name === "price") {
        state.searchData.trainsParameters.price_from = data.value.price_from;
        state.searchData.trainsParameters.price_to = data.value.price_to;
      } else {
        for (let key in state.searchData.trainsParameters) {
          if (key.includes(data.name)) {
            state.searchData.trainsParameters[key] = data.status;
          }
        }
      }
    },
    setTrainsList(state, action) {
      const { data } = action.payload;

      state.searchTrainsItems = data;
    },
    setTrainId(state, action) {
      const { id } = action.payload;
      state.id = id;
    },
    setSelectionTrain(state, action) {
      const { data } = action.payload;
      state.seletedTrain = data;
    },
    setDataWagons(state, action) {
      const { data } = action.payload;
      state.dataWagons = data;
    },
  },
});

export const {
  setTrainsList,
  setParameters,
  setDataRequest,
  setTrainId,
  setSelectionTrain,
  setDataWagons,
  setTrainsParameters,
} = catalogTrainsSlice.actions;

export default catalogTrainsSlice.reducer;
