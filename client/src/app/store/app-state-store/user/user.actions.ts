import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user/user.model';

export const GET_USERS = '[ALL] Users';
export const GET_USERS_SUCCESS = '[ALL] Users Success';
export const GET_USERS_ERROR = '[ALL] Users Error';

export const GET_USERSTABLE = '[ALL] Users Table';
export const GET_USERSTABLE_SUCCESS = '[ALL] Users Table Success';
export const GET_USERSTABLE_ERROR = '[ALL] Users Table Error';

export const GET_USER = '[GET] User';
export const GET_USER_SUCCESS = '[GET] User Success';
export const GET_USER_ERROR = '[GET] User Error';

export const POST_USER = '[POST] User';
export const POST_USER_SUCCESS = '[POST] User Success';
export const POST_USER_ERROR = '[POST] User Error';

export const PUT_USER = '[PUT] User';
export const PUT_USER_SUCCESS = '[PUT] User Success';
export const PUT_USER_ERROR = '[PUT] User Error';

export const DELETE_USER = '[DELETE] User';
export const DELETE_USER_SUCCESS = '[DELETE] User Success';
export const DELETE_USER_ERROR = '[DELETE] User Error';

/*********************
 * GET all the users *
 ********************/

export class GetUsers implements Action {
    readonly type = GET_USERS;
}

export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;
    constructor(public payload: UserModel[]) { }
}

export class GetUsersError implements Action {
    readonly type = GET_USERS_ERROR;
    constructor(public payload: Error) { }
}

/***************************
 * GET all the users table *
 **************************/

 export class GetUsersTable implements Action {
    readonly type = GET_USERSTABLE;
    constructor(public payload: any) { }
}

export class GetUsersTableSuccess implements Action {
    readonly type = GET_USERSTABLE_SUCCESS;
    constructor(public payload: UserModel[]) { }
}

export class GetUsersTableError implements Action {
    readonly type = GET_USERSTABLE_ERROR;
    constructor(public payload: Error) { }
}

/******************
 * GET user by id *
 *****************/


 export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;
    constructor(public payload: UserModel) { }
}

export class GetUserError implements Action {
    readonly type = GET_USER_ERROR;
    constructor(public payload: Error) { }
}

/*****************
 * POST new user *
 ****************/

 export class PostUser implements Action {
    readonly type = POST_USER;
    constructor(public payload: UserModel) { }
}

export class PostUserSuccess implements Action {
    readonly type = POST_USER_SUCCESS;
    constructor(public payload: number) { }
}

export class PostUserError implements Action {
    readonly type = POST_USER_ERROR;
    constructor(public payload: Error) { }
}

/******************
 * PUT user by id *
 *****************/

 export class PutUser implements Action {
    readonly type = PUT_USER;
    constructor(public payload: UserModel) { }
}

export class PutUserSuccess implements Action {
    readonly type = PUT_USER_SUCCESS;
}

export class PutUserError implements Action {
    readonly type = PUT_USER_ERROR;
    constructor(public payload: Error) { }
}

/***********************
 * DELETE a user by id *
 **********************/

 export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = DELETE_USER_SUCCESS;
    constructor(public payload: UserModel) { }
}

export class DeleteUserError implements Action {
    readonly type = DELETE_USER_ERROR;
    constructor(public payload: Error) { }
}