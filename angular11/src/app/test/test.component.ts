import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {LABEL_TOKEN, TestLabelComponent} from '../test-label/test-label.component';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="generate()">Generate</button>
    <div class="flex">
      <div #ref></div>
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

  @ViewChild('ref', { read: ViewContainerRef })
  ref: ViewContainerRef;

  array: number[] = [];

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver,
              private readonly injector: Injector) { }

  generate(): void {
    for (let i = 0; i < this.count; i++) {
      const injector = Injector.create({
        parent: this.injector,
        providers: [ { provide: LABEL_TOKEN, useValue: this.getLabel(i) } ]
      });

      const factory = this.componentFactoryResolver.resolveComponentFactory(TestLabelComponent);
      const component = this.ref.createComponent(factory, null, injector);
      component.changeDetectorRef.detectChanges();
    }
  }

  getLabel(no: number): string {
    return `Label no ${no}.`;
  }

}
