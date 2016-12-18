import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Bug} from '../Bug';
import {BugOperations} from './BugOperations';


@Component({
    template:   `<span class="bugname" (click)="toggle(data)" [ngClass]="{closed:data.isClosed}">{{data.name | uppercase | trimText:20}}</span>
                <div class="datetime">{{data.createdAt}}</div>`,
    selector : 'bug-item'
})
export class BugComponent{
    
    @Input()
    data:Bug = null;

    constructor(private _bugOperations : BugOperations){

    }

    toggle(bug:Bug){
        this._bugOperations.toggle(bug)
    }
}