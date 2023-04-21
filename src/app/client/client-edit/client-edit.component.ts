import { Component, OnInit, Inject } from '@angular/core';
import { Client } from '../model/Client';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ClientService } from '../client.service';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DialogErrorComponent } from 'src/app/core/dialog-error/dialog-error.component';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  client : Client;
  edit = true;

  constructor(
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,

    private dialog: MatDialog,

    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if (this.data.client != null) {
      this.client = Object.assign({}, this.data.client);
      this.edit = true;
    }
    else {
      this.client = new Client();
      this.edit = false;
    }
  }

  onSave() {
    this.clientService.saveClient(this.client).subscribe(result => {
      this.dialogRef.close();

      if (this.edit) {
        this.snackBar.open("Cliente editado", 'Aceptar', {duration: 2000});
      } else {
          this.snackBar.open("Cliente creado", 'Aceptar', {duration: 2000});
      }
      
    }, error => {
      const dialogRef = this.dialog.open(DialogErrorComponent, {
        data: {description: "El cliente ya está registrado"}
      });
    });    
  }  

  onClose() {
    this.dialogRef.close();
  }

}
