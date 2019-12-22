import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <section class="main-container">
        <router-outlet></router-outlet>
    </section>
  `
})
export class AppComponent {
}
