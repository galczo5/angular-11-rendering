import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-test-label',
  template: `
    {{ label }}
    <div #child1></div>
    <div #child2></div>
    <div #child3></div>
    <div #child4></div>
    <div #child5></div>
    <div #child6></div>
    <div #child7></div>
    <div #child8></div>
    <div #child9></div>
    <div #child10></div>
    <div #child11></div>
    <div #child12></div>
    <div #child13></div>
    <div #child14></div>
    <div #child15></div>
    <div #child16></div>
    <div #child17></div>
    <div #child18></div>
    <div #child19></div>
    <div #child20></div>
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
export class TestLabelComponent {

  @Input()
  label: string;

  @ViewChild('child1') child1: HTMLDivElement;
  @ViewChild('child2') child2: HTMLDivElement;
  @ViewChild('child3') child3: HTMLDivElement;
  @ViewChild('child4') child4: HTMLDivElement;
  @ViewChild('child5') child5: HTMLDivElement;
  @ViewChild('child6') child6: HTMLDivElement;
  @ViewChild('child7') child7: HTMLDivElement;
  @ViewChild('child8') child8: HTMLDivElement;
  @ViewChild('child9') child9: HTMLDivElement;
  @ViewChild('child10') child10: HTMLDivElement;
  @ViewChild('child11') child11: HTMLDivElement;
  @ViewChild('child12') child12: HTMLDivElement;
  @ViewChild('child13') child13: HTMLDivElement;
  @ViewChild('child14') child14: HTMLDivElement;
  @ViewChild('child15') child15: HTMLDivElement;
  @ViewChild('child16') child16: HTMLDivElement;
  @ViewChild('child17') child17: HTMLDivElement;
  @ViewChild('child18') child18: HTMLDivElement;
  @ViewChild('child19') child19: HTMLDivElement;
  @ViewChild('child20') child20: HTMLDivElement;

}
