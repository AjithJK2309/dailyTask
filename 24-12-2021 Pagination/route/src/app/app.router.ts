import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { InvalidComponentComponent } from "./invalid-component/invalid-component.component";

export const route : Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:InvalidComponentComponent}
]