import {Component,Input} from '@angular/core';
import {Bug} from '../Bug';
@Component({
    template:   `<section class="stats">
                 <span class="closed">{{getClosedCount()}}</span>
                 <span> / </span>
                 <span>{{data.length}}</span>
                 </section>`,
    selector : 'bug-stats'
})
export class BugStatsComponent{
    @Input()
    data:Bug[] = null;

   getClosedCount(){
       let closedCount = 0;
    //    for(let i=0; i<this.data.length; i++){
    //        if(this.data[i].isClosed){
    //            ++closedCount;
    //        }
    //    }  
        this.data.forEach(function(index){
            if(index.isClosed){
                ++closedCount;
            }
        });
        return closedCount;
    }
}