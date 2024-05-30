import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexPageComponent } from './components/pokedex-page/pokedex-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex_course';
}
