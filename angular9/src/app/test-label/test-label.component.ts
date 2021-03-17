import {ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-test-label',
  template: `
    {{ text }}
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
export class TestLabelComponent extends BaseComponent implements OnInit, OnChanges {

  @Input()
  label: string;

  text: string;

  constructor(private readonly elementRef: ElementRef,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.text = this.label;
    this.selectClickEvent();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  selectClickEvent(): void {
    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(this.destroyWithComponent())
      .subscribe(() => {
        this.text = this.label + ' CLICKED';
        this.changeDetectorRef.detectChanges();
      });
  }

}
