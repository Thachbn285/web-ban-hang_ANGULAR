import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Slider } from "../../../../shared/slider/slider";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Slider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private readonly productService: ProductService) {}
  items: any;
  ngOnInit(): void {
    this.productService.getItem().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error('Error: Fail to get data \n ' + error);
      },
    });
  }
}
