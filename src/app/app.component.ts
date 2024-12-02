import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car-service-center';
  isMenuOpen = false;
  constructor(private translate: TranslateService) {}

  translateText(lang: string){
    this.translate.use(lang)
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
