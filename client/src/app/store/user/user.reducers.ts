import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from 'src/app/models/user/user.model';
import {AppAction} from '../app.action';
import * as usersActions from './user.actions';


export interface State {
    data: UserModel[];
    selected: UserModel;
    action: string;
    done: boolean;
    error?: Error;
}

const initialState: State = {
    data: [],
    selected: null,
    action: null,
    done: false,
    error: null
}

export function reducer(state = initialState, action: AppAction): State {
    switch (action.type) {
     /*************************
     * GET all users actions
     ************************/
        case usersActions.GET_USERS: 
            return { 
                ...state,
                action: usersActions.GET_USERS,
                done: false,
                selected: null,
                error: null
            };
        case usersActions.GET_USERS_SUCCESS:
            return { 
                ...state,
                data: action.payload,
                done: true,
                selected: null,
                error: null
            };
        case usersActions.GET_USERS_ERROR:
            return { 
                ...state,
                done: true,
                selected: null,
                error: action.payload
            };
     /*************************
     * GET user by id actions
     ************************/
       case usersActions.GET_USER: 
            return { 
                ...state,
                action: usersActions.GET_USER,
                done: false,
                selected: null,
                error: null
            };
        case usersActions.GET_USER_SUCCESS:
            return { 
                ...state,
                done: true,
                selected: action.payload,
                error: null
            };
        case usersActions.GET_USER_ERROR:
            return { 
                ...state,
                done: true,
                selected: null,
                error: action.payload
            };
     /*************************
     * POST user actions
     ************************/
      case usersActions.POST_USER:
        return {
          ...state,
          selected: action.payload,
          action: usersActions.POST_USER,
          done: false,
          error: null
        };
      case usersActions.POST_USER_SUCCESS:
        {
          const newUser = {
            ...state.selected,
            id: action.payload
          };
          const data = [
            ...state.data,
            newUser
          ];
          return {
            ...state,
            data,
            selected: null,
            error: null,
            done: true
          };
        }
      case usersActions.POST_USER_ERROR:
        return {
          ...state,
          selected: null,
          done: true,
          error: action.payload
        };  
     /*************************
     * PUT user actions
     ************************/
      case usersActions.PUT_USER:

        return {
          ...state,
          selected: action.payload,
          action: usersActions.PUT_USER,
          done: false,
          error: null
        };
      case usersActions.PUT_USER_SUCCESS:
        {
          const index = state
            .data
            .findIndex(h => h.userId === state.selected.userId);
          if (index >= 0) {
            const data = [
              ...state.data.slice(0, index),
              state.selected,
              ...state.data.slice(index + 1)
            ];
            return {
              ...state,
              data,
              done: true,
              selected: null,
              error: null
            };
          } else {
            return {
              ...state,
              done: true,
              selected: null,
              error: null
            };
          }
          return state;
        }
      case usersActions.PUT_USER_ERROR:
        return {
          ...state,
          done: true,
          selected: null,
          error: action.payload
        };
    /*************************
     * DELETE user actions
     ************************/
     case usersActions.DELETE_USER:
        {
          //const selected = JSON.parse(JSON.stringify(state.tableData)).rows.find(h => h.userId === action.payload);
          return {
            ...state,
            // selected,
            action: usersActions.DELETE_USER,
            done: false,
            error: null
          };
        }
      case usersActions.DELETE_USER_SUCCESS:
        {
          //const data = JSON.parse(JSON.stringify(state.tableData)).rows.filter(h => h.userId !== state.selected.userId);
          return {
            ...state,
            // data,
            selected: null,
            error: null,
            done: true
          };
        }
      case usersActions.DELETE_USER_ERROR:
        return {
          ...state,
          selected: null,
          done: true,
          error: action.payload
        };
    }

    return state;
}

/*************************
 * SELECTORS
 ************************/

export const getUsersState = createFeatureSelector <State> ('users');

export const getUsers = createSelector(getUsersState, (state: State) => state.data);

export const getUser = createSelector(getUsersState, (state: State) => {
    if (state.action === usersActions.GET_USER && state.done) {
        return state.selected;
    } else {
        return null;
    }
});

export const isCreated = createSelector(getUsersState, (state: State) =>
state.action === usersActions.POST_USER && state.done && !state.error);

export const isUpdated = createSelector(getUsersState, (state: State) => {
  return state.action === usersActions.PUT_USER && state.done && !state.error;
});

export const isDeleted = createSelector(getUsersState, (state: State) => {

  return state.action === usersActions.DELETE_USER && state.done && !state.error;
});


export const getUsersError = createSelector(getUsersState, (state: State) => {
    return state.action === usersActions.GET_USERS? state.error : null;
});

export const getUserError = createSelector(getUsersState, (state: State) => {
    return state.action === usersActions.GET_USER? state.error : null;
});

export const getPostError = createSelector(getUsersState, (state: State) => {
    return state.action === usersActions.POST_USER? state.error : null;
});

export const getPutError = createSelector(getUsersState, (state: State) => {
    return state.action === usersActions.PUT_USER? state.error : null;
});

export const getDeleteError = createSelector(getUsersState, (state: State) => {
    return state.action === usersActions.DELETE_USER? state.error : null;
});