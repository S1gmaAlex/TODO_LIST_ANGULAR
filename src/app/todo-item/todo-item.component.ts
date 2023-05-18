import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() name: string = '';
  @Input() stateTask: boolean = false;
  @Output() editing: EventEmitter<any> = new EventEmitter();
  @Output() updating: EventEmitter<any> = new EventEmitter();
  @Output() deleting: EventEmitter<any> = new EventEmitter();

  public editTask() {
    // console.log('editing');
    this.editing.emit();
  }

  public updateTask() {
    // console.log('updating');
    this.updating.emit();
  }

  public deleteTask() {
    // console.log('deleting');
    this.deleting.emit();
  }
}
