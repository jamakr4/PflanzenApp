import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-myplants-ownplant',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './myplants-ownplant.component.html',
  styleUrl: './myplants-ownplant.component.css'
})
export class MyplantsOwnplantComponent {
  plants:Plant[] = [];
  constructor(private plantService:PlantService){
    this.plants = this.plantService.getAll();
  }
  name = new FormControl();
  nickname = new FormControl();
  size = new FormControl();
  age = new FormControl();
  category1 = new FormControl();
  category2 = new FormControl();
  water = new FormControl();
  maintenance = new FormControl();
  temperature = new FormControl();
  humidity = new FormControl();
  sunlight = new FormControl();

  addPlant(){
  const newPlant: Plant ={
    id: this.plantService.getNewId(),
    name: this.name.getRawValue(),
    scientificName: "Ficus benjamina",
    price: 0,
    description: "To be added",
    inStock: false,
    category: [this.category1.getRawValue(), this.category2.getRawValue()],
    water: Number(this.water),
    toxicity: false,
    humidity: this.humidity.getRawValue(),
    temperature: this.temperature.getRawValue(),
    sunlight: this.sunlight.getRawValue(),
    toughness: "undefined",
    tips: ["This is a custom plant!"],
    promotion: false,
    rating: NaN,
    bestseller: false,
    indoor: true,
    outdoor: false,
    maintenance: this.maintenance.getRawValue(),
    expierience: "Intermediate",
    space: "Custom",
    purpose: "Decoration",
    petfriendly: false,
    allergyfriendly: false,
    imageUrl: ["/Sansevieria_trifasciata2.png", "/Sansevieria_trifasciata2.png", "/Sansevieria_trifasciata2.png"],

    nickname: this.nickname.getRawValue(),
    size: this.size.getRawValue(),
    age: this.age.getRawValue(),
    pinned: false
    }
    this.plantService.addToPlants(newPlant);
  }
  
}
