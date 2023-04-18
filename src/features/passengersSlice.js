import { createSlice } from "@reduxjs/toolkit";
import { getTotalPrice } from "../utils/WagonSelectionUtils";
const passengersSlice = createSlice({
  name: "passengers",
  initialState: {
    subscriber: "",
    passengers: [],
    contributor: {
      first_name: "",
      last_name: "",
      patronymic: "",
      phone: "",
      email: "",
      payment_method: "cash",
    },
    /* totalPrice: {
      items: [
        { type: "adult", count: 0, price: 0 },
        { type: "child", count: 0, price: 0 },
        { type: "child-no-seats", count: 0, price: 0 },
      ],
    },*/
    dataSeats: [
      {
        type: "adult",
        text: "Взрослых",
        count: 0,
        deskription: "Можно добавить ещё 3 пассажиров",
        seats: [],
        price: 0,
      },
      {
        type: "child",
        text: "Детских",
        count: 0,
        deskription:
          "Можно добавить ещё 3 детей до 10 лет.Своё место в вагоне, как у взрослых, но дешевле в среднем на 50-65% ",
        seats: [],
        price: 0,
      },
      {
        type: "child-no-seats",
        text: 'Детских "без места"',
        count: 0,
        limit: 3,
        seats: [],
        price: 0,
      },
    ],
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    setDataPassengers: (state, action) => {
      const { data } = action.payload;
      const copyState = state.passengers;
      const idx = copyState.findIndex((item) => item.info.id === data.info.id);
      idx === -1 ? copyState.push(data) : (copyState[idx] = data);
      state.passengers = copyState;
    },
    setContributor: (state, action) => {
      const { data } = action.payload;
      state.contributor = data;
    },
    deletePassenger: (state, action) => {
      const { id } = action.payload;
      const filteredArr = state.passengers.filter(
        (item) => item.info.id !== id
      );

      state.passengers = filteredArr;
    },
    addSeats: (state, action) => {
      const { data, price } = action.payload;

      const idx = state.dataSeats.findIndex((item) => item.type === data.type);

      const copySeats = state.dataSeats[idx].seats;
      const seatsIndex = copySeats.findIndex((item) => item === data.seats);

      seatsIndex === -1
        ? copySeats.push(data.seats)
        : copySeats.splice(seatsIndex, 1);
      const result = {
        ...state.dataSeats[idx],
        seats: copySeats,
        price: price,
        count: copySeats.length,
        limit: state.dataSeats[idx].limit - copySeats.length,
      };

      state.dataSeats[idx] = result;

      state.totalPrice = getTotalPrice(state.dataSeats);
      state.totalCount = state.dataSeats.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
    clearDataSeats: (state) => {
      const copySeats = state.dataSeats;
      const result = copySeats.map((item) => {
        return (item = { ...item, seats: [], count: 0 });
      });
      state.dataSeats = result;

      state.totalPrice = 0;
      state.totalCount = 0;
    },
    addSubscriber: (state, action) => {
      console.log(action.payload, "action.payload");
      const { data } = action.payload;
      state.subscriber = data;
    },
  },
});

export const {
  setDataPassengers,
  setContributor,
  deletePassenger,
  addSeats,
  clearDataSeats,
  addSubscriber,
} = passengersSlice.actions;

export default passengersSlice.reducer;
