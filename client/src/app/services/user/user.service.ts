import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginInfoModel } from '../../auth/auth.model';
import { UserModel } from '../../models/user/user.model';

const apiUrl = environment.apiUrl + 'users/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<UserModel[]> {
      return this.http.get<any>(apiUrl + 'users');
    }

    onLogin(loginInfo: AuthLoginInfoModel): Observable<UserModel> {
        return this.http.post<UserModel>(apiUrl + 'users/onLogin', loginInfo, {headers});
    }

    postUser(user: UserModel): Observable<UserModel> {
      return this.http.post<UserModel>(apiUrl + 'users/', user, {headers});
    }

    putUser(user: UserModel): Observable<UserModel> {
      return this.http.put<UserModel>(apiUrl + 'users/' + user.userId, user, {headers});
    }

    deleteUser(userId: number): Observable<UserModel> {
      return this.http.delete<UserModel>(apiUrl + 'users/' + userId);
    }
}
