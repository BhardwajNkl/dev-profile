import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitByFullStop'
})
export class SplitByFullStopPipe implements PipeTransform {
  transform(value: string): string[] {
    return value.split('.').filter(sentence => sentence.trim().length > 0);
  }
}
