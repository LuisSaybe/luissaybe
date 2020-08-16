import { Type } from "web/js/redux/user-interface/action";
import { UserInterface } from "../../definition/user-interface";

const initialState: UserInterface = {
  language: 'en',
};

export function userInterface(
  state = initialState,
  action,
): UserInterface {
  switch (action.type) {
    case Type.set: {
      return { ...state, ...action.data };
    }
  }
  return state;
}