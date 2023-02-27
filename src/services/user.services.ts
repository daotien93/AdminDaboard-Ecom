import { api } from "../helpers";

const login = async (email: string, password: string) => {
  const body = { email, password };
  return await api.post('v1/auth', body).then((response) => {
    return response.data;
  });
};

const getCurentUser = async ():Promise<any> => {
  return await api.get('v1/auth').then((response) => {
    return response.data;
  })
}

const logout = () => {
  sessionStorage.removeItem('user');
};

export const userService:any = {
  login,
  logout,
  getCurentUser
};