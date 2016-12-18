import {Component} from '@angular/core'
import { Bug } from './Bug';

@Component({
   templateUrl : 'app/bugTracker.template.html',
    selector : 'bug-tracker'
})
export class BugTrackerComponent{
   //listBugs : BugTracker = new BugTracker();
   bugs : Array<Bug> =[];
   newBugName : string = '';
  
   addNew(){
    var newBug = {
       name: this.newBugName,
       isClosed : false,
       createdAt : new Date()
    };
    //this.bugs.push(newBug);
    this.bugs = this.bugs.concat([newBug]);
   }
   
//    toggle(bug:Bug){
//        bug.isClosed = !bug.isClosed;
//    }

    removeClosed(){
        for(let i=this.bugs.length-1;i>=0;i--){
            if(this.bugs[i].isClosed){
                this.bugs.splice(i,1);
            }
        }       
    }
//moved this to bug-stats component
//    getClosedCount(){
//        let closedCount = 0;
//        for(let i=0;i < this.bugs.length;i++){
//            if(this.bugs[i].isClosed){
//                ++closedCount;
//                return closedCount;
//            }
//        }   
//    }
}