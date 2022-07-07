import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
   this.init();
  }

  init() {
    this.storage.create();
  }



  public  set(key: string, value: any) {
    return  this.storage?.set(key, value);
  }

  public  get(key: string){
    return  this.storage?.get(key);
  }

  public  delete(key: string){
    return  this.storage?.remove(key);
  }

  public  clear(){
    return  this.storage?.clear();
  }



  
}
