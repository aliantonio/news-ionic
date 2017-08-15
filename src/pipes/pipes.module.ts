import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format/date-format';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [DateFormatPipe,
    FilterPipe],
	imports: [],
	exports: [DateFormatPipe,
    FilterPipe]
})
export class PipesModule {}
