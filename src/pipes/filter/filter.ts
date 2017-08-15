import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], query: any, domain): any {
    if (query == undefined) { 
      return items;
    } else {
      console.log('query:', query);
      console.log('domain:', domain);
      if (domain == 'reddit') {
        return items.filter(item => item.data.title.toUpperCase().indexOf(query.toUpperCase()) > -1);
      } else {
        return items.filter(item => item.title.toUpperCase().indexOf(query.toUpperCase()) > -1);
      }
    }
  }

}
