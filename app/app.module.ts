import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BugTrackerComponent} from './bugTracker.component';
import { BugComponent} from './BugTracker/Bug.Component';
import { BugStatsComponent} from './BugTracker/BugStats.Component';
import {TrimTextPipe} from './pipes/trimText.Pipe';
import {SortPipe} from './pipes/sort.Pipe';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTrackerComponent, BugComponent,BugStatsComponent,TrimTextPipe,SortPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
