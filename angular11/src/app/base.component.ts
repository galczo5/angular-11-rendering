import { Directive, OnDestroy, OnInit } from '@angular/core';
import {MonoTypeOperatorFunction, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive()
export abstract class BaseComponent {

  private destroy$: Subject<void> = new Subject<void>();

  private ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  destroyWithComponent(): MonoTypeOperatorFunction<unknown> {
    return takeUntil(this.destroy$);
  }

}
