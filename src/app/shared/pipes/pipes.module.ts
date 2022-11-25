import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPipe } from './data/data.pipe';



@NgModule({
  declarations: [DataPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
