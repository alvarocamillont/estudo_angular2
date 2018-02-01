import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import localePt from '@angular/common/locales/pt';



@NgModule({
  declarations: [
    AppComponent,
    ExemploPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [/*
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (seetingService) => seetingService.getLocale()
    }*/
    // { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
