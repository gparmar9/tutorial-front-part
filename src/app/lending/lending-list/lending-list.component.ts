import { Component, OnInit } from '@angular/core';
import { Lending } from '../model/Lending';
import { MatTableDataSource } from '@angular/material/table';
import { LendingService } from '../lending.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { LendingCreateComponent } from '../lending-create/lending-create.component';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { Game } from '../../game/model/Game';
import { Client } from '../../client/model/Client';
import { GameService } from 'src/app/game/game.service';
import { ClientService } from 'src/app/client/client.service';

@Component({
  selector: 'app-lending-list',
  templateUrl: './lending-list.component.html',
  styleUrls: ['./lending-list.component.scss']
})
export class LendingListComponent implements OnInit {

  lending: Lending;
  games: Game[];
  clients: Client[];

  filterTitle: Game;
  filterClient: Client;
  filterDate: Date;

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Lending>();
  displayedColumns: string[] = ['id', 'game', 'client', 'begin_date', 'end_date', 'action'];

  constructor(
    private lendingService: LendingService,
    public dialog: MatDialog,

    private gameService: GameService,
    private clientService: ClientService,
  ){}

  ngOnInit(): void {

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
    
    this.loadPage();
  }

  loadPage(event?: PageEvent){

    let pageable : Pageable =  {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sort: [{
          property: 'id',
          direction: 'ASC'
      }]
    }

    if (event != null) {
        pageable.pageSize = event.pageSize
        pageable.pageNumber = event.pageIndex;
    }

    this.lendingService.getLendings(pageable).subscribe(data => {
      this.dataSource.data = data.content;
      this.pageNumber = data.pageable.pageNumber;
      this.pageSize = data.pageable.pageSize;
      this.totalElements = data.totalElements;
    })
  }

  createLending(){
    const dialogRef = this.dialog.open(LendingCreateComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
  }); 
  }

  deleteLending(lending: Lending) {    
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
        data: { title: "Eliminar préstamo", description: "Atención si borra el préstamo se perderán sus datos.<br> ¿Desea eliminar el préstamo?" }
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.lendingService.deleteLending(lending.id).subscribe(result =>  {
                this.ngOnInit();
            }); 
        }
    });
  }

  onSearch(): void{
    let idGame = this.filterTitle != null ? this.filterTitle.id : null;
    let idClient = this.filterClient != null ? this.filterClient.id : null;
    let newDate = this.filterDate;

    let pageable : Pageable =  {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sort: [{
          property: 'id',
          direction: 'ASC'
      }]
    }

    this.lendingService.getLendings(pageable, idGame, idClient, newDate).subscribe(data => {
        this.dataSource.data = data.content;
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
    });
  }

  onCleanFilter(): void {
    this.filterTitle = null;
    this.filterClient = null;
    this.filterDate = null;

    this.onSearch();
}

}