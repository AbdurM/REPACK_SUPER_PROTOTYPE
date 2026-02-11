import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'c1',
      type: 'Employer Contribution',
      amount: 1250.0,
      date: '2 Feb 2026',
      description: 'Monthly SG contribution',
    },
    {
      id: 'c2',
      type: 'Personal Contribution',
      amount: 500.0,
      date: '1 Feb 2026',
      description: 'Voluntary contribution',
    },
  ],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
