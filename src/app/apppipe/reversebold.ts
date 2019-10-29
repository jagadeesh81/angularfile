import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name:'reverse'
})

export class ReverseStringPipe implements PipeTransform{
    transform(input:string):any{
        let result:string=" ";
        for(var i=input.length;i>=0;i--){
            result=input.charAt(i)+result;
        }
        return result;
    }
}