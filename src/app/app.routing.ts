import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { ListaComponent } from "app/lista/lista.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [

    {path:'',component:HomeComponent},
    {path:'lista', component: ListaComponent},
    {path:'**', redirectTo:''}

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);