import { Component, Inject } from '@angular/core';
import { Lending } from '../model/Lending';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LendingService } from '../lending.service';
import { Game } from '../../game/model/Game';
import { Client } from '../../client/model/Client';
import { GameService } from '../../game/game.service';
import { ClientService } from '../../client/client.service';
import { DialogErrorComponent } from 'src/app/core/dialog-error/dialog-error.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-lending-create',
  templateUrl: './lending-create.component.html',
  styleUrls: ['./lending-create.component.scss']
})
export class LendingCreateComponent {

  lending: Lending;
  games: Game[];
  clients: Client[];

  filterGame: Game;
  filterClient: Client;
  filterDate: Date;

  constructor(
    public dialogRef: MatDialogRef<LendingCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private lendingService: LendingService,
    private gameService: GameService,
    private clientService: ClientService,

    private dialog: MatDialog,

    private snackBar: MatSnackBar,
  ) {}
  

  ngOnInit(): void {
    this.lending = new Lending();
  
    this.gameService.getGames().subscribe(
        games => {
            this.games = games;
        }
    );

    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients
      }
    );
  }

  onSave() {

    const begin = new Date(this.lending.beginDate);
    const end = new Date(this.lending.endDate);

    const time = Math.abs(end.getTime() - begin.getTime());
    const days = Math.ceil(time / (1000 * 60 * 60 * 24)); 

    if (end < begin){
      const dialogRef = this.dialog.open(DialogErrorComponent, {
        data: {description: "La fecha de fin no puede ser menor que la de inicio"}
      });
    }

    else if (days > 14){
      const dialogRef = this.dialog.open(DialogErrorComponent, {
        data: {description: "El préstamo no puede ser de más de 14 días"}
      });
    }

    else {
      this.lendingService.saveLending(this.lending).subscribe(result =>  {
        this.dialogRef.close();
        this.snackBar.open("Préstamo creado", 'Aceptar', {
          duration: 2000
        });
      }, error => {
        this.snackBar.open("Error", 'Aceptar', {
          duration: 2000
        });
      }); 
    }
  }  

  onClose() { 
    this.dialogRef.close();
  }

}
