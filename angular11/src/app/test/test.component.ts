import {Component, Input} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-test',
  template: `
    <div class="flex">
      <app-test-label *ngFor="let i of getArray(); let index = index" [label]="getLabel(index)"></app-test-label>
    </div>
  `,
  styles: [`
    .flex {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class TestComponent extends BaseComponent {

  count = 20000;

  array: number[] = [];

  constructor() {
    super();
  }

  getArray(): Array<number> {
    return new Array<number>(this.count);
  }

  getLabel(no: number): string {
    return `Label no ${no}.`;
  }

}
