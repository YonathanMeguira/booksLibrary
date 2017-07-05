import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EditBookComponent} from './edit-book/edit-book.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import {MdToolbarModule} from '@angular/material';
import { TitleCasePipe } from './title-case.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EditBookComponent,
    DeleteBookComponent,
    AddBookComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdToolbarModule
],
  entryComponents: [EditBookComponent, DeleteBookComponent, AddBookComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
