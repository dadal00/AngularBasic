import { Component } from '@angular/core';
import BackgroundComponent from './core/background/background.component';

@Component({
  selector: 'app-root',
  imports: [BackgroundComponent],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  title = 'product-app';
}
