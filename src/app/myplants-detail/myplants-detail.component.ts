import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../classes/plants';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-myplants-detail',
  standalone: true,
  imports: [NgIf, RouterLink,FormsModule],
  templateUrl: './myplants-detail.component.html',
  styleUrls: ['./myplants-detail.component.css']
})
export class MyplantsDetailComponent implements OnInit {
  plant: Plant | undefined;
  editname: boolean = false;
  editsize: boolean = false;
  editage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.plant = this.plantService.getPlantByID(id);
    });
  }

  anpinnen(plant: any) {
    plant.pinned = !plant.pinned;
  }

  isangepinnt(plant: any): boolean {
    return plant.pinned;
  }

  navigateToDiary() {
    if (this.plant) {
      this.router.navigate(['/diary-index-component'], { queryParams: { plant: this.plant.name } });
    }
  }

  deletePlant(plant: any): void {
   plant.pinned = false;  
   this.plantService.removeFromMyplants(plant.id);
  }
  edit(){
    this.editname = true;
  }
  saveNickname() {
    this.editname = false;
    if(this.plant) {
    console.log('Neuer Nickname speichert:', this.plant.nickname);
    }
  }
  
  updateSize() {
    
    console.log('Größe aktualisiert:', this.plant?.size);
  }
  updateAge() {
    
    console.log('Alter aktualisiert:', this.plant?.age);
  }
}


