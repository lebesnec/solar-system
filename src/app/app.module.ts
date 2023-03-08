import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SceneComponent } from './scene/scene.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FormsModule } from '@angular/forms';
import { SearchPanelComponent } from './shell/search-panel/search-panel.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CelestialBodyDialogComponent } from './scene/celestial-body-dialog/celestial-body-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SettingsComponent } from './shell/settings/settings.component';
import { ContactComponent } from './shell/contact/contact.component';
import { AboutComponent } from './shell/about/about.component';
import { LegalsComponent } from './shell/legals/legals.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SceneComponent,
    SearchPanelComponent,
    CelestialBodyDialogComponent,
    SettingsComponent,
    ContactComponent,
    AboutComponent,
    LegalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
