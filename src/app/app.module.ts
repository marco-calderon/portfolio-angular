import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ChartistModule } from 'ng-chartist';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { SkillsComponent } from './containers/skills/skills.component';
import { SkillRowComponent } from './components/skill-row/skill-row.component';
import { EntryComponent } from './pages/blog/entry/entry.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    SkillsComponent,
    SkillRowComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartistModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
          
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
