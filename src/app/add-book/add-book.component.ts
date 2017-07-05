import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Books} from '../books.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Books = new Books;
  constructor(public dialogRef: MdDialogRef<AddBookComponent>) {
  }
  fieldsNotSet() {
    return (this.book.title && this.book.author && this.book.date);
  };
}
