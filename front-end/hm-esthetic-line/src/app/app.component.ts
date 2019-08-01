import { Component, OnInit, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { getTranslationProviders } from '../i18n-providers';
declare const require;

@Component({
    // tslint:disable-next-line
    selector: 'body',
    template: '<router-outlet></router-outlet>',
    providers:  [
                { provide: TRANSLATIONS, useValue: require(`raw-loader!../locale/messages.pt.xlf`) },
                { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
                { provide: LOCALE_ID, useValue: localStorage.getItem('locale') },
        I18n
      ]
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
