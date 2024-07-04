import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../classes/plants';
import { ActivatedRoute  } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-myplants-description',
  standalone: true,
  imports: [NgIf],
  templateUrl: './myplants-description.component.html',
  styleUrl: './myplants-description.component.css'
})
export class MyplantsDescriptionComponent implements OnInit {
 p: Plant | undefined;

 constructor(private router: ActivatedRoute, private plantServices: PlantService) {}

ngOnInit(): void {
    this.router.params.subscribe(params =>{
      const id = params['id'];
      this.p = this.plantServices.getPlantByID(id);
    });
}

}
