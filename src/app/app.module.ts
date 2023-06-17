import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import { HeaderComponent } from './component/header/header.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { DisplayMainComponent } from './component/display-main/display-main.component';
import { BugDetailsComponent } from './component/bug-details/bug-details.component';
import { SingleBugViewComponent } from './component/single-bug-view/single-bug-view.component';
import { AddProjectComponent } from './component/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    HeaderComponent,
    SideNavComponent,
    DisplayMainComponent,
    BugDetailsComponent,
    SingleBugViewComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
