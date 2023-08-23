import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ExoComponent } from './exo/exo.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", redirectTo : "/" },
  { path : "notfound", component : NotfoundComponent },
  // Une façon possible de déclarer les routes enfants de démo :
  // Soucis : Elles sont toutes chargées au démarrage de l'appli
  // { path : "demo", component : DemoComponent, children : [
  //   { path : "demo1" , component : Demo1Component }
  // ] }
  // Lazy-Loading
  // On ne va charger le module Demo et tous ses enfants que lorsqu'on va accéder à la route demo
  { path : "demo", component : DemoComponent, loadChildren : () => import("./demo/demo.module").then(m => m.DemoModule) },
  { path : "exo", component : ExoComponent, loadChildren : () => import("./exo/exo.module").then(m => m.ExoModule) },
  
  // ! Devra toujours être votre dernière route
  // ** -> Si aucunes des routes au dessus -> redirection
  { path : "**", redirectTo : "/notfound"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
