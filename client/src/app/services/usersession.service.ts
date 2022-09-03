import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSession } from '../models/usersession/usersession.model';

const apiUrl = environment.apiUrl + 'usersession/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class UserSessionService {

    constructor(private http: HttpClient) { }

    getUserSessions(): Observable<UserSession[]> {
      return this.http.get<any>(apiUrl + 'usersession');
    }

    getUserSessionById(userSessionId: number, username: string, transaction: string): Observable<UserSession> {
      return this.http.post<UserSession>(apiUrl + 'usersession/byid', {userSessionId: userSessionId, username: username, transaction: transaction}, {headers});
    }

    postUserSession(userSession: UserSession): Observable<UserSession> {
      return this.http.post<UserSession>(apiUrl + 'usersession/', userSession, {headers});
    }

    putUserSession(userSession: UserSession): Observable<UserSession> {
      return this.http.put<UserSession>(apiUrl + 'usersession/' + userSession.userSessionId, userSession, {headers});
    }

}
