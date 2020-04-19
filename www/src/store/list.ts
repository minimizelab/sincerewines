import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: WineListState = {
  wineList: [],
};

type WineListState = { wineList: { id: string; quantity: number }[] };

const addWine: CaseReducer<WineListState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.wineList.push({ id: payload, quantity: 1 });
};

const deleteWine: CaseReducer<WineListState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.wineList = state.wineList.filter((wine) => wine.id !== payload);
};

const wineList = createSlice({
  name: 'wineList',
  initialState,
  reducers: { addWine, deleteWine },
});

export const { actions, reducer } = wineList;

export default wineList.reducer;
