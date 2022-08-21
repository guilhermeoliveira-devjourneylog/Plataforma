import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseNavigationModule } from '@fuse/components/navigation';
// import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  declarations: [
        ClassicLayoutComponent
    ],
  imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        // LanguagesModule,
        UserModule,
        SharedModule
    ],
  exports: [
        ClassicLayoutComponent
    ]
})
export class ClassicLayoutModule {}