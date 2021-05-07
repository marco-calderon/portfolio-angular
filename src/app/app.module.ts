import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ChartistModule } from 'ng-chartist';
import { MarkdownModule } from 'ngx-markdown';
import { SampleComponent } from './pages/blog/sample/sample.component';
import { SkillsComponent } from './containers/skills/skills.component';
import { SkillRowComponent } from './components/skill-row/skill-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    SampleComponent,
    SkillsComponent,
    SkillRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartistModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
