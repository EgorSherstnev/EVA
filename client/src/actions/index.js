import {
   SET_IS_AUTH,
   SET_USER
} from "./types"

export const setIsAuth = (bool) => ({
   type: SET_IS_AUTH,
   payload: bool,
});

export const setUser = (user) => ({
   type: SET_USER,
   payload: user,
})