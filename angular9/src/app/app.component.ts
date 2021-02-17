import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-test [count]="counter"></app-test>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular9';

  counter = 1000;

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.counter === 1000) {
          this.counter = 10000;
        } else {
          this.counter = 1000;
        }

        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
