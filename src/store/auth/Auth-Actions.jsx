import { LOGIN, LOGOUT } from './Auth-Types';

export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT }); //payload olmaz cikis yapiyor
