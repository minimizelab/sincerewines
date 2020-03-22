import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
  cookieDialogOpen: false,
  privateCustomer: true,
};

type UiState = typeof initialState;

const menuToggled: CaseReducer<UiState, PayloadAction<boolean>> = (
  state,
  { payload }
) => {
  state.menuOpen = payload;
};

const cookieDialogToggled: CaseReducer<UiState, PayloadAction<boolean>> = (
  state,
  { payload }
) => {
  state.cookieDialogOpen = payload;
};

const customerTypeToggled: CaseReducer<UiState, PayloadAction<boolean>> = (
  state,
  { payload }
) => {
  state.privateCustomer = payload;
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    menuToggled,
    cookieDialogToggled,
    customerTypeToggled,
  },
});

export const { actions, reducer } = ui;

export default ui.reducer;
