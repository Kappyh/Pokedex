import { Component, OnInit } from '@angular/core';
import 'bootbox'; //inclusão bootbox
import { HttpService } from "app/resources/http.service"; // service criado para get htpp
import { Router } from "@angular/router"; // para redirecionamento da rota

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nome: string = "";
  public pokemon: any;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.pokemon = { name: undefined, sprites: { front_default: undefined } };
  }

  public buscarPokemon(nome) {

    this.httpService.get('http://pokeapi.co/api/v2/pokemon/', nome)
      .subscribe(
      data => {
        this.pokemon = data.json();
      },
      error => {
       if (error.status === 404) {
          bootbox.alert('Ops!Pokemon não encontrado,tente novamente!');
        } else{
          bootbox.alert(error._body);
        }
      }
      );
  }

  public reset(): void {
    this.pokemon = { name: undefined, sprites: { front_default: undefined } };
  }

  public verTodos(): void {
    this.router.navigateByUrl('/lista');
  }

}
