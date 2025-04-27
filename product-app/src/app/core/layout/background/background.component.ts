import { Component } from '@angular/core';
import { GoBackComponent } from './go-back/go-back.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-background',
  imports: [GoBackComponent, RouterOutlet],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css',
  standalone: true,
})
export default class BackgroundComponent {}
