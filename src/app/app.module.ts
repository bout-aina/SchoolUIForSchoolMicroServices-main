
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentsComponent } from './students/students.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorsComponent } from './professors/professors.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';


export function kcFactory(kcService: KeycloakService) {
  return  () => {
    kcService.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'G22-GestionSchool',
        clientId: 'gestion-school'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: []
    });
  }
}



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentsComponent,
    ProfessorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: kcFactory, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
