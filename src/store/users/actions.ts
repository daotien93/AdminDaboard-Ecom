import {
    LOAD_USERS_PAGING_FAILURE,
    LOAD_USERS_PAGING_REQUEST,
    LOAD_USERS_PAGING_SUCCESS,
    UsersActionTypes,
  } from './types';
  
  import { Dispatch } from 'redux';
  import { userService } from '../../services';
  
  export const loadUsersPaging:any = (currentPage: number) => {
    return async (dispatch: Dispatch<UsersActionTypes>) => {
      try {
        dispatch({
          type: LOAD_USERS_PAGING_REQUEST,
        });
  
        const res = await userService.getUsersPaging(currentPage);
  
        dispatch({
          type: LOAD_USERS_PAGING_SUCCESS,
          payload: res,
        });
      } catch (error:any) {
        dispatch({
          type: LOAD_USERS_PAGING_FAILURE,
          payload: { error: error.toString() },
        });
      }
    };
  };