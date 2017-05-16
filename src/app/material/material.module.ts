import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    NoopAnimationsModule
  ],
  exports: [
    MdTabsModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule {
}
