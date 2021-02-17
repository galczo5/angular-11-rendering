import {Component, Inject, InjectionToken, Input, OnInit} from '@angular/core';

export const LABEL_TOKEN = new InjectionToken('');

@Component({
  selector: 'app-test-label',
  template: `
    <div>
      <span>{{ label }}</span>
    </div>
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
export class TestLabelComponent implements OnInit {

  constructor(@Inject(LABEL_TOKEN) readonly label: string) { }

  ngOnInit(): void {
  }

}
