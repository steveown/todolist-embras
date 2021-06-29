import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/app/shared/crud.service';
import { Retorno } from 'src/app/shared/retorno';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tarefa } from 'src/app/shared/tarefa';

@Injectable()
export class TarefaService extends CrudService<Tarefa> {

  private url = environment.baseUrl;
  constructor(protected http: HttpClient) {
    super(http, '/tarefas/');
   }
  
   buscarTarefasID(id: number): Observable<Retorno> {
    return this.http.get<Retorno>(this.url + '/tarefas/' + id).pipe(take(1));
  }

}
