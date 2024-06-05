import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoplandingpageComponent } from './shoplandingpage/shoplandingpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShoplandingpageComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PflanzenApp';
}
