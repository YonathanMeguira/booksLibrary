import {Component, OnInit} from '@angular/core';
import {Books} from './books.model';
import {BooksService} from './books.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {AddBookComponent} from './add-book/add-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BooksService],
  entryComponents: [EditBookComponent, DeleteBookComponent, AddBookComponent]
})
export class AppComponent extends Books implements OnInit {

  books: Books[];
  dialogRef: MdDialogRef<EditBookComponent>;
  deleteBookDialogRef: MdDialogRef<DeleteBookComponent>;
  addBookDialogRef: MdDialogRef<AddBookComponent>;

  constructor(private booksService: BooksService, public dialog: MdDialog,) {
    super();
  };

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    this.booksService.fetchBooks().subscribe(
      res => {
        this.books = res;
      },
      error => alert(`Bummer, there was an error : ${error}`)
    );
  };

  editBook = (book: Books, originalBookIndex: number) => {
    const bookInstance = book;
    const bookData = {data: bookInstance, bookIndex: originalBookIndex};
    this.dialogRef = this.dialog.open(EditBookComponent, {
      data: bookData,
      disableClose: true
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const bookIndex = result.bookIndex;
        this.books[bookIndex].title = (result.title) ? result.title : this.books[bookIndex].title;
        this.books[bookIndex].author = (result.author) ? result.author : this.books[bookIndex].author;
        this.books[bookIndex].date = (result.date) ? result.date : this.books[bookIndex].date;
      }
    });
  };

  deleteBook = (book: Books) => {
    this.deleteBookDialogRef = this.dialog.open(DeleteBookComponent, {
      data: book,
      disableClose: true
    });
    this.deleteBookDialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const bookIndex = this.books.indexOf(book);
        this.books.splice(bookIndex, 1);
      }
    });
  }

  addBook = (newBook: Books) => {
    this.addBookDialogRef = this.dialog.open(AddBookComponent, {
      data: newBook,
      disableClose: true
    });
    this.addBookDialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        result.image = '../assets/images/newBook.jpg';
        const bookAlreadyExist = this.books.map((book) => {
          return book.title.toLowerCase() === result.title.toLowerCase();
        });
        console.log(bookAlreadyExist);
        if (bookAlreadyExist.indexOf(true) == -1){
          this.books.push(result);
        }else{
          alert(`can not add ${result.title} because it already exists`);
        }
      };
    });
  }
}
