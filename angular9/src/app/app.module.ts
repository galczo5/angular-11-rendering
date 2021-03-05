import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestLabelComponent } from './test-label/test-label.component';
import { TestDirective } from 'src/app/test-label/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestLabelComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
