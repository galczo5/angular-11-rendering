import {Component, Input} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-test',
  template: `
    <div class="flex">
      <ng-container *ngFor="let i of getArray(); let index = index">
        <app-test-label app-test-directive [test]="'test'" [label]="getLabel(index)">.</app-test-label>
      </ng-container>
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

  @Input()
  count = 0;

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
