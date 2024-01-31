import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavbarGComponent } from './app/navbar-g/navbar-g.component';
import { FooterGComponent } from './app/footer-g/footer-g.component';
//bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

bootstrapApplication(NavbarGComponent).catch((err) => console.error(err));
bootstrapApplication(FooterGComponent).catch((err) => console.error(err));
