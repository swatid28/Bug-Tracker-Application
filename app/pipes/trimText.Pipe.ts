import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(text:string, trimLength:number=20){
        return text.length <trimLength ? text : text.substr(0,trimLength)+'...'
    }
}