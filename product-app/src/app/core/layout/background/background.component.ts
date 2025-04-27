import { Component } from '@angular/core';
import { GoBackComponent } from './goback/goback.component';

@Component({
  selector: 'app-background',
  imports: [GoBackComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css',
  standalone: true,
})
export class BackgroundComponent {}
