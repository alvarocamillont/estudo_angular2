import { NgModule } from '@angular/core';
import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
