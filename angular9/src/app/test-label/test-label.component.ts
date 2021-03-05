import {Component, Input, OnInit} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-test-label',
  template: `
    <span>{{ label }}</span>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: monospace;
      color: white;
      padding: 4px 8px;
      background: lightcoral;
      border-radius: 4px;
      margin-right: 2px;
      margin-bottom: 2px;
    }
  `]
})
export class TestLabelComponent extends BaseComponent {

  @Input()
  label: string;

  constructor() {
    super();
  }

}
