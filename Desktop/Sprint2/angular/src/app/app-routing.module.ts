import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PropertyComponent } from './property/property.component';
import { SearchByLocationComponent } from './property/searchByLocation';
import { SearchByTypeComponent } from './property/searchByType';
import { SearchByBudgetComponent } from './property/searchByBudget';
import { SearchByIdComponent } from './property/searchbyid';
import { AnalysisComponent } from './analysis/analysis.component';
import { TopBuyerComponent } from './analysis/topBuyer';
import { LocationAnalysisComponent } from './analysis/LocationAnalysis';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './login/signup';
import { PropertySoldComponent } from './property/propertySold';
import { AdminLoginComponent } from './admin/adminLogin';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
   
    { path : 'login', component : LoginComponent},
    { path : 'analysis', component : AnalysisComponent ,
        children : [ { path : 'topbuyer', component : TopBuyerComponent}] },
    { path : 'topbuyer', component : TopBuyerComponent},
    { path : 'locationanalysis', component : LocationAnalysisComponent},
    { path : 'user', component : UserComponent},
      { path : 'profile', component : CreateProfileComponent},
      { path : 'update', component : UpdateProfileComponent },
      { path : 'sell', component : PropertyComponent },
      { path : 'searchbylocation', component : SearchByLocationComponent},
      { path : 'searchbytype', component : SearchByTypeComponent},
      { path : 'searchbybudget', component : SearchByBudgetComponent},
      { path : 'searchbyid', component : SearchByIdComponent},
    { path : 'admin', component : AdminComponent},
    { path : 'signup', component : SignupComponent},
    { path : 'propertysold', component : PropertySoldComponent},
    { path : 'adminlogin', component : AdminLoginComponent}
   ] )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
