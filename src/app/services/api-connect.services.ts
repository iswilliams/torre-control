import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiConnectService {

    constructor(private http: HttpClient) {
    }
     
    request (api: string,  body?: null | any){
        const headers = { 'content-type': 'application/json'} 
        return this.http.post(environment.bffUrl+api, body,{'headers':headers})
    }
}