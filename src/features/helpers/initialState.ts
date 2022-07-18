export type State = {
  loadItemCount: number;
  lastItemNumber: number;
  items: Array<Object>;
  fetchHandleId: number;
};

export const initialState: State = {
  loadItemCount: 10,
  lastItemNumber: 0,
  items: [],
  fetchHandleId: -1,
};
