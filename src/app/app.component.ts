import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ValentineComponent } from "./valentine/valentine.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pookie-website';
}
