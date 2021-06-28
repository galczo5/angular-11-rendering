import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  NgModule,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent, Observable, ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Injectable()
export class Service$ {

  private readonly stream$: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor() {
    this.stream$.next('Service$');
  }

  getStream(): Observable<string> {
    return this.stream$.asObservable();
  }
}

@Component({
  selector: 'app-Component$',
  template: '<span style="background: red;"> {{value}} </span>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component$ implements OnInit, OnDestroy{

  private readonly onDestroy$: Subject<void> = new Subject<void>();
  value: string;

  constructor(private readonly service: Service$,
              private readonly ref: ElementRef,
              private readonly renderer: Renderer2,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    fromEvent(this.ref.nativeElement, 'mouseenter')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.renderer.setStyle(this.ref.nativeElement, 'color', 'white');
      });

    this.service.getStream()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(x => {
        this.value = x;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Component$
  ],
  exports: [
    Component$
  ],
  providers: [
    Service$
  ]
})
export class Module$ {

}
