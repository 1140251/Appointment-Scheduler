import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentNotFoundComponent, PaginationComponent } from '../..';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentNotFoundComponent, PaginationComponent],
  exports: [
    ContentNotFoundComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
