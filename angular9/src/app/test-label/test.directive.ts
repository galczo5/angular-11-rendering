import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Directive({
  selector: '[app-test-directive]'
})
export class TestDirective extends BaseComponent implements OnInit, OnChanges {

  @Input()
  test: string;

  constructor(private readonly elementRef: ElementRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const a = 0;
  }

  ngOnInit(): void {
    const a = 0;
  }

}
