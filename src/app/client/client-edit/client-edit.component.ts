import { Component, OnInit, Inject } from '@angular/core';
import { Client } from '../model/Client';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from '../client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  client : Client;

  constructor(
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    if (this.data.client != null) {
      this.client = Object.assign({}, this.data.client);
    }
    else {
      this.client = new Client();
    }
  }

  /*
  onSave() {
    this.clientService.saveClient(this.client).subscribe({
      next: () => { this.dialogRef.close() },
      error: (error: HttpErrorResponse) => {
          this.dialog.open(DialogErrorComponent, {
          data: { message: error.error.message }
        });
      }
    });
  }
  */

  onSave() {
    this.clientService.saveClient(this.client).subscribe(result => {
      this.dialogRef.close();
    });    
  }  

  onClose() {
    this.dialogRef.close();
  }

}
