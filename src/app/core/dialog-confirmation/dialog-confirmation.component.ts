import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {

  title : string;
  description : string;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private snackBar: MatSnackBar,

  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
  }

  onYes() {
    this.dialogRef.close(true);
    this.snackBar.open("Eliminado", 'Aceptar', {duration: 2000});
  }

  onNo() {
    this.dialogRef.close(false);
  }
}

