import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plant } from '../classes/plants';

@Component({
  selector: 'app-myplants-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './myplants-main.component.html',
  styleUrl: './myplants-main.component.css'
})
export class MyplantsMainComponent{

}
