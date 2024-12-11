import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>('ar');
  currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = 'ar';
    
    translate.setDefaultLang('ar');
    this.setLanguage(defaultLang);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang.next(lang);
    document.documentElement.lang = lang;
  }

  getCurrentLanguage(): string {
    return this.currentLang.value;
  }
}