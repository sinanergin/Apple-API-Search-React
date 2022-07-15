export type State = {
  loadItemCount: number;
  lastItemNumber: number;
  items: Array<Object>;
};

export const initialState: State = {
  loadItemCount: 10,
  lastItemNumber: 10,
  items: [],
};

// export default initialState;
