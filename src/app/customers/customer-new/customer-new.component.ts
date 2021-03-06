import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  emailFormControl: FormControl;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) 
  { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }

  openRepDialog()
  {
    const dialogRef = this.dialog.open(RepDialogComponent, 
    {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => 
    {
      alert(`User chose ${result}`);
    });
  } 

  openUndoSnackBar()
  {
    const snackBarRef = this.snackBar.open('Customer saved', 'UNDO', 
    {
      horizontalPosition: 'end'
    });

    snackBarRef.onAction().subscribe(() => 
    {
      alert('Undo save');
    });
  }
}
