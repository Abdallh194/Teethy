import { createSlice } from "@reduxjs/toolkit";

export const TeethySlice = createSlice({
  name: "Teethy",
  initialState: {
    value: 0,
    exp: "852",
    stuff: "125",
    Total_pations: "150,000",
    pations_book: [],
    Book_vALIDATION_iD: [],
    Prev_approved: false,
  },
  reducers: {
    InsertNewBook: (state, action) => {
      let isexit = false;
      state.pations_book.forEach((p) => {
        if (p.date === action.payload.date) {
          state.Prev_approved = true;
          isexit = true;
        }
      });
      if (!isexit) {
        state.pations_book.push(action.payload);
      }
    },
    HandleBookId: (state, action) => {
      const john = state.pations_book.find(
        (person) => person.first_name === action.payload
        //  &&
        // person.mobile === action.payload.Rev_Mobile
      );
      console.log(john);
    },
  },
});

// Action creators are generated for each case reducer function
export const { InsertNewBook, HandleBookId } = TeethySlice.actions;

export default TeethySlice.reducer;
