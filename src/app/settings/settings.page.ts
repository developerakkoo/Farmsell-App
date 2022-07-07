import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  darkMode;
  isDarkModeEnabled;
  constructor(private theme: ThemeService,
              private storage: StorageService,
              private router: Router
              ) { }

  ngOnInit() {
    this.storage.get('darkmode').then((mode) => {
      this.darkMode = mode;
    })
  }

  openEditProfile(){
    this.router.navigate(['edit-profile']);
  }
  onDarkModeEnabled(event){
    this.isDarkModeEnabled = event.detail.checked;
  
    if(this.isDarkModeEnabled){
      this.theme.enableDark();
      this.storage.set('darkmode', 'true');
    }if(!this.isDarkModeEnabled){
      this.theme.enableLight();
      this.storage.set('darkmode', 'false');

    }
    
  }




}
