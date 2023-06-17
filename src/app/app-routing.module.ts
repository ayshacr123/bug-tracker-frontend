import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugDetailsComponent } from './component/bug-details/bug-details.component';
import { DisplayMainComponent } from './component/display-main/display-main.component';

const routes: Routes = [
  {path:'display',component:DisplayMainComponent},
  {path:'bug',component:BugDetailsComponent},
  {path:'',redirectTo:'/display',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
