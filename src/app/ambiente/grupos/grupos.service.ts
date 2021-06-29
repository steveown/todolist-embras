import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/app/shared/crud.service';
import { Retorno } from 'src/app/shared/retorno';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Grupo } from '../../shared/grupo';

@Injectable()
export class GrupoService extends CrudService<Grupo> {

  private url = environment.baseUrl;
  constructor(protected http: HttpClient) {
    super(http, '/grupos/');
   }
  
   buscarGruposID(id: number): Observable<Retorno> {
    return this.http.get<Retorno>(this.url + '/grupos/' + id).pipe(take(1));
  }

}
