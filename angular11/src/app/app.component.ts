import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="refreshView()">Refresh</button>
    <ng-container *ngIf="!destroyed">
      <app-test></app-test>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular11';

  private readonly destroy$: Subject<void> = new Subject<void>();

  destroyed = true;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getArray(): Array<number> {
    return new Array<number>(20000).fill(0);
  }

  refreshView(): void {
    this.destroyed = !this.destroyed;
    this.changeDetectorRef.detectChanges();
  }
}
