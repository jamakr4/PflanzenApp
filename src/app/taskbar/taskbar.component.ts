import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
  imports: [RouterLink]
})
export class TaskbarComponent implements OnInit {
  pageLink = "";

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.setPageLink(this.location.path());

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setPageLink(this.location.path());
    });
  }

  private setPageLink(path: string) {
    switch (path) {
      case "/shop":
        this.pageLink = "shop";
        break;
      case "/profil":
        this.pageLink = "profil";
        break;
      case "/home":
        this.pageLink = "home";
        break;
      case "/myplants":
        this.pageLink = "myplants";
        break;
      default:
        this.pageLink = "";
        break;
    }
  }
}
