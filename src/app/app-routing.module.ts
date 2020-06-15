import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { AppComponent } from './pages/app/app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomeComponent } from './pages/home/home.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ChartsComponent } from './pages/charts/charts.component'
import { NavbarComponent } from './cmps/navbar/navbar.component'


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'contact', pathMatch: 'full', component: ContactPageComponent},
  {path: 'contact/:id', pathMatch: 'full', component: ContactDetailsPageComponent},
  {path: 'edit', pathMatch: 'full', component: ContactEditComponent},
  {path: 'edit/:id', component: ContactEditComponent},
  {path: 'charts', component: ChartsComponent},
  {path: '', component: NavbarComponent, outlet: 'navbar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
