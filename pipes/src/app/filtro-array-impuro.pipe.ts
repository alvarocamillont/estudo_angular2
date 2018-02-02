import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})

export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
