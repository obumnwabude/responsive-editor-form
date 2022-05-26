import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { LinksTableComponent } from './links-table/links-table.component';

@NgModule({
  declarations: [AppComponent, EditorComponent, LinksTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
