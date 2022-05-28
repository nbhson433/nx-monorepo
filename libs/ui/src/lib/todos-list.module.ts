import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosListComponent],
  exports: [TodosListComponent],
})
export class TodosListModule {}
