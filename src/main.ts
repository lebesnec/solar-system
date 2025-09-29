import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app/app.component';
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      TranslateModule.forRoot({
        fallbackLang: 'en',
        loader: provideTranslateHttpLoader({
          prefix: './assets/i18n/',
          suffix: '.json',
        })
      }),
      LayoutModule,
      DragDropModule,
      FormsModule,
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatDialogModule,
      MatSidenavModule,
      MatListModule,
      MatButtonToggleModule,
      MatMenuModule,
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ]
})
  .catch(err => console.error(err));
