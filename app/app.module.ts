import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BugTracker} from './bugTracker.component';
import { BugComponent} from './BugTracker/Bug.Component';
import { BugStatsComponent} from './BugTracker/BugStats.Component';
import { TrimTextPipe} from './pipes/trimText.Pipe';
import { SortPipe} from './pipes/sort.Pipe';
import { BugOperations} from './BugTracker/BugOperations';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTracker, BugComponent,BugStatsComponent,TrimTextPipe,SortPipe],
  bootstrap:    [ AppComponent ],
  providers:    [BugOperations]
})
export class AppModule { }
