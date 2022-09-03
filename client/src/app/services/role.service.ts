import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role/role.model';

const apiUrl = environment.apiUrl + 'roles/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class RolesService {

    constructor(private http: HttpClient) { }

    getRoles(): Observable<Role[]> {
      return this.http.get<any>(apiUrl + 'roles');
    }

    getRoleById(roleId: number): Observable<Role> {
      return this.http.post<Role>(apiUrl + 'roles/byid', {roleId: roleId}, {headers});
    }

    postRole(role: Role): Observable<Role> {
      return this.http.post<Role>(apiUrl + 'roles/', role, {headers});
    }

    putRole(role: Role): Observable<Role> {
      return this.http.put<Role>(apiUrl + 'roles/' + role.roleId, role, {headers});
    }

    deleteRole(roleId: number): Observable<Role> {
        return this.http.delete<Role>(apiUrl + 'roles/' + roleId);
    }

}
