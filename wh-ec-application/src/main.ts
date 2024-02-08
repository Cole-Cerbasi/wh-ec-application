
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavbarGComponent } from './app/navbar-g/navbar-g.component';
import { FooterGComponent } from './app/footer-g/footer-g.component';
import { ItemCardComponent } from './app/item-card/item-card.component';
import { ItemCarouselComponent } from './app/item-carousel/item-carousel.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(NavbarGComponent).catch((err) => console.error(err));
bootstrapApplication(FooterGComponent).catch((err) => console.error(err));
//bootstrapApplication(ItemCardComponent).catch((err) => console.error(err));
//bootstrapApplication(ItemCarouselComponent).catch((err) => console.error(err));


/*
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';


bootstrapApplication(AppModule, appConfig).catch((err) => console.error(err));
*/

/*
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
*/
