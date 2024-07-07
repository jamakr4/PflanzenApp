import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../classes/plants';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-myplants-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './myplants-detail.component.html',
  styleUrls: ['./myplants-detail.component.css']
})
 export class MyplantsDetailComponent implements OnInit{
  plant: Plant | undefined;
  
  constructor(
     private route: ActivatedRoute,
    private plantService: PlantService
  ) { }
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      
      const id = params['id'] 
      this.plant = this.plantService.getPlantByID(id);
    });
    }
    anpinnen(plant: any) {
     plant.pinned = !plant.pinned;
    }
    isangepinnt(plant:any): boolean{
      return plant.pinned;

    }
  }



  


