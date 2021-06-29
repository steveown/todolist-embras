import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Retorno } from 'src/app/shared/retorno';
import { take, delay } from 'rxjs/operators';

@Injectable()
export class CrudService<T> {

  protected baseUrl = environment.baseUrl;
  protected sort: string = 'codigo';

  constructor(
    protected http: HttpClient,
    private API_ENDPOINT,
    protected sortParam: string = 'codigo'
  ) {
    this.sort = sortParam;
  }

  search(s:string, pagina:number=0): Observable<Retorno> {
    return this.http.get<Retorno>(this.baseUrl + this.API_ENDPOINT +'pesquisa/'+ s +'?page='+ pagina +'&size='+ environment.paginacao +'&sort='+ this.sort );
  }

  list(pagina:number=0): Observable<Retorno> {
    return this.http.get<Retorno>(this.baseUrl + this.API_ENDPOINT +'?page='+ pagina +'&size='+ environment.paginacao +'&sort='+ this.sort );
  }

  read(codigo: number): Observable<Retorno> {
    return this.http.get<Retorno>(this.baseUrl + this.API_ENDPOINT + codigo).pipe(take(1));
  }

  create(model: T) {
    return this.http.post(this.baseUrl + this.API_ENDPOINT, model).pipe(take(1));
  }

  update(model: T) {
    return this.http.put(this.baseUrl + this.API_ENDPOINT, model).pipe(take(1));
  }

  delete(codigo: number): Observable<Retorno> {
    return this.http.delete<Retorno>(this.baseUrl + this.API_ENDPOINT + codigo).pipe(take(1));
  }

  pesquisa(s: any): Observable<Retorno> {
    return this.http.get<Retorno>(this.baseUrl + this.API_ENDPOINT + 'pesquisa/' + s);//.pipe(delay(1000));
  }

}