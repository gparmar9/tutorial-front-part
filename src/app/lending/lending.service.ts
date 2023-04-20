import { Injectable } from '@angular/core';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { Observable, of } from 'rxjs';
import { LendingPage } from './model/LendingPage';
import { LENDING_DATA } from './model/mock-lendings';
import { Lending } from './model/Lending';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  constructor(
    private http: HttpClient
  ) { }

  getLendings(pageable: Pageable, idGame?: number, idClient?: number, newDate?: Date): Observable<LendingPage>{
    return this.http.post<LendingPage>(this.composeFindUrl(idGame,idClient,newDate), {pageable:pageable});
  }

  private composeFindUrl(idGame?: number, idClient?: number, newDate?: Date) : string {
    let params = '';

    if (idGame != null) {
        params += 'idGame='+idGame;
    }

    if (idClient != null) {
        if (params != '') params += "&";
        params += "idClient="+idClient;
    }

    if (newDate != null){
        if(params != '') params += '&'
        params += 'newDate=' + newDate.toLocaleDateString();
    }

    let url = 'http://localhost:8080/lending'

    if (params == '') return url;
    else return url + '?'+params;
}

  saveLending(lending: Lending): Observable<void>{
    let url = 'http://localhost:8080/lending';
        if (lending.id != null) url += '/'+lending.id;

        return this.http.put<void>(url, lending);
  }

  deleteLending(idLending: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/lending/'+idLending);
  }

}
