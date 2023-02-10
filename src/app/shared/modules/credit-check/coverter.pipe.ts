import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coverter'
})
export class CoverterPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    if (!value) {
      return '';
    }

    switch (targetUnit) {
      case 'km':
        return value * 1.600943;
      case 'm':
        return value * 1.60943 * 10000;
      case 'cm':
        return value * 1.60943 * 1000 * 1000;
      default : 
       throw new Error('Targe unit not supported');
    }
  }
}

