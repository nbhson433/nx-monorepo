import { Component, Input } from '@angular/core';
import { Todo } from '@nx-monorepo/data';

@Component({
  selector: 'nx-monorepo-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  @Input() todos: Todo[] = [];
}
