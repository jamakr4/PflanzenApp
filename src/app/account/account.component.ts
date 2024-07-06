import { Component, OnInit , Inject, PLATFORM_ID, input } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  name: string = '';
  email: string = '';
  adress: string = '';
  password: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

  updateName(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('name', this.name);
    }
  }

  updateEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('email', this.email);
    }
  }

  updateAdress(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('adress', this.adress);
    }
  }

  updatePassword(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('password', this.password);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.name = localStorage.getItem('name') || 'Robert Musterstudent';
      this.email = localStorage.getItem('email') || 'robert@mkg.de';
      this.adress = localStorage.getItem('adress') || 'Studentstr. 2, 46539 Dinslaken';
      this.password = localStorage.getItem('password') || 'unsicher3000';
    }
  }

}
