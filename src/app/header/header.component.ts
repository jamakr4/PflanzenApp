import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerTitle = "";
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    let path = this.location.path();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let path = this.location.path();
      switch (path) {
        case "/shop":
          this.headerTitle = "Pflanzen Shop";
          break;
          case "/profil":
            this.headerTitle = "Ihr Profil";
            break;
            case "/menu":
              this.headerTitle = "Weiteres";
              break;
              case "/diary-index-component":
              case "/diary-change-component/:id":
              case "/diary-input-component":
              this.headerTitle = "Pflanzentagebuch";
              break;
                case "/quiz":
                this.headerTitle = "Pflanzen Quiz";
                break;
              
               
        default:
          this.headerTitle = "Pflanzen App";
          break;
      }
    });
  }
}