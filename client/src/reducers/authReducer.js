import {
   SET_IS_AUTH,
   SET_USER,
} from '../actions/types';

const initialState = {
   isAuth: false,
   user: {},
};

export default function useReducer(state = initialState, action) {
   switch (action.type) {
      case SET_IS_AUTH:
         return { ...state, isAuth:action.payload };
      case SET_USER:
         return { ...state, user:action.payload };
      default:
         return state;
   }
}