import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Object } from '../models/object/object.model';

const apiUrl = environment.apiUrl + 'objects/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class ObjectsService {

    constructor(private http: HttpClient) { }

    getObjects(): Observable<Object[]> {
      return this.http.get<any>(apiUrl + 'objects');
    }

    getObjectById(objectId: number): Observable<Object> {
      return this.http.post<Object>(apiUrl + 'objects/byid', {objectId: objectId}, {headers});
    }

    postObject(object: Object): Observable<Object> {
      return this.http.post<Object>(apiUrl + 'objects/', object, {headers});
    }

    putObject(object: Object): Observable<Object> {
      return this.http.put<Object>(apiUrl + 'objects/' + object.objectId, object, {headers});
    }

    deleteObject(objectId: number): Observable<Object> {
      return this.http.delete<Object>(apiUrl + 'objects/' + objectId);
  }

}
