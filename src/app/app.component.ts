import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuzzFeed';

  constructor(private themeService: ThemeService) {}
  
  ngOnInit(): void {
    
  }
}
