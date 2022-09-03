import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../auth/auth.model';
import { User } from '../models/user/user.model';

const apiUrl = environment.apiUrl + 'users/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<any>(apiUrl + 'users');
    }

    onLogin(loginInfo: LoginInfo): Observable<User> {
        return this.http.post<User>(apiUrl + 'users/onLogin', loginInfo, {headers});
    }

    postUser(user: User): Observable<User> {
      return this.http.post<User>(apiUrl + 'users/', user, {headers});
    }

    putUser(user: User): Observable<User> {
      return this.http.put<User>(apiUrl + 'users/' + user.userId, user, {headers});
    }

    deleteUser(userId: number): Observable<User> {
      return this.http.delete<User>(apiUrl + 'users/' + userId);
    }
}
