const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  departman: null,
  hekim: null,
  tarih: null,
  saat: null,
  name: null,
  surName: null,
  phone: null,
  email: null,
  address: null,
  message: null,
};

const appointSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addDepartment: (state, action) => {
      state.departman = action.payload;
    },
    addDentist: (state, action) => {
      state.hekim = action.payload;
    },
    addDate: (state, action) => {
      state.tarih = action.payload;
    },
    addTime: (state, action) => {
      state.saat = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addSurname: (state, action) => {
      state.surName = action.payload;
    },
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default appointSlice.reducer;
export const {
  addDepartment,
  addDentist,
  addDate,
  addTime,
  addName,
  addSurname,
  addPhone,
  addEmail,
  addAddress,
  addMessage,
} = appointSlice.actions;
