import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

}
