import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-shopheader',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './shopheader.component.html',
  styleUrl: './shopheader.component.css'
})
export class ShopheaderComponent {
searchTerm = "";
constructor(activatedRoute:ActivatedRoute, private router:Router){
  activatedRoute.params.subscribe((params) => {
    if(params['searchTerm'])
      this.searchTerm = params['searchTerm']
  });
}

search(term:string):void{
  if(term)
    this.router.navigateByUrl('/search/'+ term);
}
}