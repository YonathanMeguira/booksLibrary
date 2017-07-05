/**
 * Created by if_found_call_0586288454 on 05/07/2017 ap. J.-C..
 */
import {Component, Inject} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import {BookInstanceModel} from '../books.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.template.html',
  styleUrls: ['./edit-book.css']
})

export class EditBookComponent {
  bookInstance: BookInstanceModel;
  placeholderInstance: any;
  constructor(public dialogRef: MdDialogRef<EditBookComponent>, @Inject(MD_DIALOG_DATA) public data: any){
    this.bookInstance = data;
  }
}
