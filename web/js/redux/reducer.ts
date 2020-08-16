import { combineReducers } from "redux";

import { userInterface } from "web/js/redux/user-interface/reducer";

export const reducers = combineReducers({
  userInterface,
});

export type RootState = ReturnType<typeof reducers>;