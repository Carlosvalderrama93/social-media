import { createSlice } from "@reduxjs/toolkit";

export type user = { id: string; name: string };
const initialState: user[] = [
  { id: "0", name: "Tianna Jenkins" },
  { id: "1", name: "Kevin Grant" },
  { id: "2", name: "Madison Price" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded() {},
    userUpdated() {},
    userDeleted() {},
  },
});

export const { userAdded, userDeleted, userUpdated } = usersSlice.actions;
export default usersSlice.reducer;
