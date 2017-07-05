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
  fieldsNotSet(book: Books){
    return (book.title && book.author && book.date) !== undefined;
  };
}
