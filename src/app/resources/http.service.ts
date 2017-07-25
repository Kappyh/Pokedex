import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }


  /**
   * 
   * @param path caminho 
   * @param parametro parametro que será buscado
   * Método get para buscar informações na api pokeapi
   */
  public get(path, parametro?) {

    return this.http.get(path + parametro);

  }
}
