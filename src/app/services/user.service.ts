import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = environment.API_URL;

  constructor(private http: HttpClient, private storage: StorageService) {}

  public isUserMobileNumberVerified() {
    return this.storage.get('isOtpValid');
  }

  public postUser(
    userId: string,
    fName: string,
    lName: string,
    email: string,
    contactNumber: string,
    verificationStatus: boolean,
    couponCode: string,
    walletCashBackAvailable: number,

  ) {
    const formdata = new FormData();

    formdata.append('userId', userId);
    // formdata.append('file', file, file.name);
    formdata.append('fName', fName);
    formdata.append('lName', lName);
    formdata.append('email', email);
    formdata.append('contactNumber', contactNumber);

    formdata.append('verificationStatus', verificationStatus.toString());
    formdata.append('couponCode', couponCode);
    formdata.append(
      'walletCashbackAvailable',
      walletCashBackAvailable.toString()
    );


    return this.http.post(this.URL + '/user/profiles', formdata);
  }

  public getUserById(id: string) {
    return this.http.get(this.URL + '/user/profile/' + id);
  }
}
