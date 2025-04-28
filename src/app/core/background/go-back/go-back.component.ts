import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'go-back-button',
  imports: [],
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.css',
  standalone: true,
})
export class GoBackComponent {
  currentPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }

  goBack() {
    if (this.currentPath == '/') {
      return;
    }
    let pathParts = this.currentPath.split('/').filter(Boolean);
    pathParts.pop();
    const parentPath = '/' + pathParts.join('/');
    this.router.navigate([parentPath]);
  }
}
