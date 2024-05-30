import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    providers: [Router],
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  private router: Router = new Router;

  public clicked = false;

  public Jokes(){
    this.clicked = true;
    this.router.navigate(['jokes']);
  }

  public Categories(){
    this.clicked = true;
    this.router.navigate(['Categories']);
  }
}
