import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'menuPipe', pure: false })
export class MenuPipe implements PipeTransform {
     transform(items: Array<any>, dishtype: string): Array<any> {
        return items.filter(item => item.dishType === dishtype);
    }
}