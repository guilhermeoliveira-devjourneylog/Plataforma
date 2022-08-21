import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { ClassicLayoutModule } from 'app/layout/layouts/classic/classic.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    EmptyLayoutModule,
    ClassicLayoutModule
  ],
  exports: [
    LayoutComponent,
    EmptyLayoutModule,
    ClassicLayoutModule
  ]
})
export class LayoutModule {}