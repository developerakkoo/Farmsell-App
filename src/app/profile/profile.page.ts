import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private storage: StorageService) { }

  ngOnInit() {
  }


  logout() {
    this.storage.delete('loginid')
    .then(cleared => this.router.navigate(['']));
  }

}
