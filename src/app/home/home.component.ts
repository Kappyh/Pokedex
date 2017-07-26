import { Component, OnInit } from '@angular/core';

import { HttpService } from "app/resources/http.service"; // service criado para get htpp
import { Router } from "@angular/router"; // para redirecionamento da rota
import 'bootbox'; //inclusão bootbox

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nome: string = '';
  public pokemon: any;
  public spinner: boolean;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {

    this.spinner = false;
    this.pokemon = { name: undefined, sprites: { front_default: undefined } };

  }

  public buscarPokemon(nome) {

    this.spinner = true;

    if (nome !== '' && nome !== undefined && nome !== null) {

      this.httpService.get('http://pokeapi.co/api/v2/pokemon/', nome)
        .subscribe(
        data => {
          this.pokemon = data.json();
          this.spinner = false;
          event.preventDefault();
        },
        error => {
          if (error.status === 404) {
            bootbox.alert('Ops!Pokemon não encontrado,tente novamente!');
            this.spinner = false;
          } else {
            bootbox.alert(error._body);
            this.spinner = false;
          }
        }
        );
    } else {
      bootbox.alert('Você precisa informar o nome do pokemon!');
      this.spinner = false;
    }
  }

  public reset(): void {
    this.pokemon = { name: undefined, sprites: { front_default: undefined } };
  }

  public verTodos(): void {
    this.router.navigateByUrl('/lista');
  }

}
