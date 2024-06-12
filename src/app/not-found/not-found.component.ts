import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgIf],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Sorry, nothing found";

  @Input()
  resetLinkText = "";

  @Input()
  resetLinkRoute = "/";

}
