import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule],
  declarations: [DataFormComponent]
})
export class DataFormModule {}
