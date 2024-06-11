import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-title',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './shopping-cart-title.component.html',
  styleUrl: './shopping-cart-title.component.css'
})
export class ShoppingCartTitleComponent {
  @Input()
  title!: string;

  @Input()
  margin? = '1rem 0 1rem 0.2rem'

  @Input()
  fontSize? = '1.7rem'
}
