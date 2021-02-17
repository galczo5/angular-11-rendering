import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div class="flex">
      <div *ngFor="let i of getArray(); let index = index">
        <app-test-label [label]="getLabel(index)"></app-test-label>
      </div>
    </div>
  `,
  styles: [`
    .flex {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class TestComponent {

  @Input()
  count = 0;

  array: number[] = [];

  constructor() { }

  getArray(): Array<number> {
    return new Array<number>(this.count);
  }

  getLabel(no: number): string {
    return `Label no ${no}.`;
  }

}
