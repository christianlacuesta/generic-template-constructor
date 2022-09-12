import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPostResponse } from 'src/app/models/app-models/app-common.model';
import { environment } from 'src/environments/environment';
import { UserSessionModel } from '../../models/usersession/usersession';

const apiUrl = environment.apiUrl + 'usersession/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class UserSessionService {

    constructor(private http: HttpClient) { }

    getUserSessions(): Observable<UserSessionModel[]> {
      return this.http.get<any>(apiUrl + 'usersession');
    }

    getUserSessionById(userSessionId: number, username: string, transaction: string): Observable<UserSessionModel> {
      return this.http.post<UserSessionModel>(apiUrl + 'usersession/byid', {userSessionId: userSessionId, username: username, transaction: transaction}, {headers});
    }

    postUserSession(userSession: UserSessionModel): Observable<ApiPostResponse> {
      return this.http.post<ApiPostResponse>(apiUrl + 'usersession/', userSession, {headers});
    }

    putUserSession(userSession: UserSessionModel): Observable<ApiPostResponse> {
      return this.http.put<ApiPostResponse>(apiUrl + 'usersession/' + userSession.userSessionId, userSession, {headers});
    }

}
