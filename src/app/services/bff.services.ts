import { Injectable } from '@angular/core';
import { ApiConnectService } from './api-connect.services';


@Injectable({
    providedIn: 'root'
})

export class BFFService {

    private options: any = { };

    constructor(private apiConnect: ApiConnectService){

    }
    
    login (usuario:string, password:string){
        console.log('login - init');
        this.options = {
            usuario:usuario, 
            password: password
        }
        return this.apiConnect.request('/login', this.options);
    }

}