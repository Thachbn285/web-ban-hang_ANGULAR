import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Slider, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
