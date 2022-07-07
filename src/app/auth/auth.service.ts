import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }



  getToken(number){
    const body ={
      phonenumber: `+91${number}`.toString(),
   
    }

    console.log( `+91${number}`);
    
    return this.http.post(environment.API_URL +"/token", body);
  }

  verifyToken(code, number){
    const body ={
      code: code,
      phonenumber:`+91${number}`.toString()
    }

    return this.http.post(environment.API_URL +"/verify", body);

  }
}
