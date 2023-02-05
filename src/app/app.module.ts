import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormIncriptionComponent } from './form-incription/form-incription.component';
import { FormChangerRoleComponent } from './form-changer-role/form-changer-role.component';
import { ProfilComponent } from './profil/profil.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormIncriptionComponent,
    FormChangerRoleComponent,
    ProfilComponent,
    FormConnexionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
