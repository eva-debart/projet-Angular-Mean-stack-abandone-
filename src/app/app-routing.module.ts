import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormIncriptionComponent } from './form-incription/form-incription.component';
import { ProfilComponent } from './profil/profil.component';
import { NgOptimizedImage } from '@angular/common';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'inscrire', component: FormIncriptionComponent },
  { path: 'connexion', component: FormIncriptionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', redirectTo:'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{} 
 
