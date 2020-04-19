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

const increaseQuantity: CaseReducer<WineListState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.wineList = state.wineList.map((wine) => {
    if (wine.id === payload) {
      return { ...wine, quantity: wine.quantity + 1 };
    }
    return wine;
  });
};

const decreaseQuantity: CaseReducer<WineListState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.wineList = state.wineList.map((wine) => {
    if (wine.id === payload) {
      if (wine.quantity === 1) {
        return { ...wine, quantity: 1 };
      } else {
        return { ...wine, quantity: wine.quantity - 1 };
      }
    }
    return wine;
  });
};

const wineList = createSlice({
  name: 'wineList',
  initialState,
  reducers: { addWine, deleteWine, increaseQuantity, decreaseQuantity },
});

export const { actions, reducer } = wineList;

export default wineList.reducer;
