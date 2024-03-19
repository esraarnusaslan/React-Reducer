import { LOGIN, LOGOUT } from '../types.js';

export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT }); //payload olmaz cikis yapiyor
