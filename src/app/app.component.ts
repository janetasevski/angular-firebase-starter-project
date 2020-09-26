import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleState: boolean;

  toggleNav() {
    this.toggleState = !this.toggleState;
  }
}
