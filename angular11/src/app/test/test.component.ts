import {ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import {interval} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-test',
  template: `
    <h2>{{iteration}}</h2>
    <div *ngIf="visible" class="flex">
      <app-test-label *ngFor="let i of getArray()" label="Test Label"></app-test-label>
    </div>
  `,
  styles: [`
    .flex {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class TestComponent extends BaseComponent implements OnInit {

  count = 1000;

  array: number[] = [];

  visible = false;

  iteration = 0;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    interval(100)
      .pipe(
        take(100),
        this.destroyWithComponent()
      )
      .subscribe(() => {
        this.visible = !this.visible;

        if (this.visible) {
          this.iteration++;
        }

        this.changeDetectorRef.detectChanges();
      });
  }

  getArray(): Array<number> {
    return new Array<number>(this.count);
  }

  getLabel(no: number): string {
    return `Label no ${no}.`;
  }

}
