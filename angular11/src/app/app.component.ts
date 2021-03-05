import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="refreshView()">Refresh</button>
    <app-test *ngIf="!destroyed" [count]="counter"></app-test>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular11';

  counter = 50000;

  private readonly destroy$: Subject<void> = new Subject<void>();

  destroyed: boolean = true;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  refreshView() {
    this.destroyed = true;
    this.changeDetectorRef.detectChanges();

    timer(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.destroyed = false;
        this.changeDetectorRef.detectChanges();
      })

  }
}
