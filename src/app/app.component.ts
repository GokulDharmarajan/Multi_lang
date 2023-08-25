import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedLang: string;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'tn', 'ma']);
    translate.setDefaultLang('en');
    this.selectedLang = translate.currentLang;
    // this.selectedLang = localStorage.getItem('selectedLang') || 'en'; 
    // translate.use(this.selectedLang);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLang', lang)
    console.log(lang, "asdfd");

  }
  clear() {
    localStorage.clear()
    window.location.reload();
    console.log("cleared");
  }
}
