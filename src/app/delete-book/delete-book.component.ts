import {Component, Inject} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})

export class DeleteBookComponent  {
  constructor(public dialogRef: MdDialogRef<DeleteBookComponent>, @Inject(MD_DIALOG_DATA) public data: any){
  }
}
