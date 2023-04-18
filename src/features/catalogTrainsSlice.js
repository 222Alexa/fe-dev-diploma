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
    },
    seletedTrain: {},
    dataWagons:{},
  },
  reducers: {
    setDataRequest: (state, action) => {
      const { data } = action.payload;
      state.searchData.travelData = data;
    },
    setParameters: (state, action) => {
      const { sort, limit, offset } = action.payload;
      console.log(offset, "actionParameters offset");
      if (sort) state.searchData.parameters.sort = sort;
      if (limit) state.searchData.parameters.limit = limit;
      if (offset>=0) state.searchData.parameters.offset = offset;
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
    setDataWagons(state, action){
      const { data } = action.payload;
      state.dataWagons = data;
    }
  },
});

export const {
  setTrainsList,
  setParameters,
  setDataRequest,
  setTrainId,
  setSelectionTrain,
  setDataWagons
} = catalogTrainsSlice.actions;

export default catalogTrainsSlice.reducer;
