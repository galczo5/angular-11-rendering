import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="refreshView()">Refresh</button>
    <app-test *ngIf="!destroyed"></app-test>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  title = 'angular9';

  counter = 20000;

  private readonly destroy$: Subject<void> = new Subject<void>();

  destroyed: boolean = true;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
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
