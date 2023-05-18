import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo_list_remake';
  public editcontent: string = ''
  public items: any[] = [];
  public submitTask(content: string) {
    this.items.push({ id: this.items.length, name: content, state: false })
    // console.log(this.items)
  }

  public editing(i: number) {
    this.items[i].state = true;
    this.items.map((item, index) => {
      if (i === index) {
        item.name = this.editcontent;
      }
      return item;
    })
    //console.log(this.items)
  }

  public updating(i: number) {
    this.items[i].state = false;
  }

  public deleting(id: number) {
    this.items = this.items.filter(task => task.id !== id)
  }
}
