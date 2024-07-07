import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle = "";

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.setHeaderTitle(this.location.path());

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setHeaderTitle(this.location.path());
    });
  }

  private setHeaderTitle(path: string) {
    switch (path) {
      case "/shop":
        this.headerTitle = "Plant Shop";
        break;
      case "/profil":
        this.headerTitle = "My Profile";
        break;
      case "/menu":
        this.headerTitle = "Menu";
        break;
      case "/myplants":
        this.headerTitle = "My Plants";
        break;
      case "/diary-index-component":
      case "/diary-change-component/:id":
      case "/diary-input-component":
        this.headerTitle = "Plant Diary";
        break;
      case "/quiz":
        this.headerTitle = "Plant Form";
        break;
      case "/home":
        this.headerTitle = "Plant App";
        break;
      default:
        this.headerTitle = "Plant App";
        break;
    }
  }
}
