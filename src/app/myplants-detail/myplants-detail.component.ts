import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../classes/plants';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-myplants-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './myplants-detail.component.html',
  styleUrl: './myplants-detail.component.css'
})
 export class MyplantsDetailComponent{
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
  }



  


