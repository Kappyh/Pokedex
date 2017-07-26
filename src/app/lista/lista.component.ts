import { Component, OnInit } from '@angular/core';

import { HomeComponent } from "app/home/home.component";
import { HttpService } from "app/resources/http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {

  public pokemon: any = [{ results: { name: undefined, url: undefined } }];
  public page: number = 20;
  public currentPage: number = 20;
  public spinner: boolean;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {

    /* inicia a listagem */
    this.spinner = true;

    this.httpService.get('http://pokeapi.co/api/v2/', 'pokemon')
      .subscribe(
      res => {
        this.pokemon = res.json();
        this.spinner = false;
      },
      error => {
        console.log(error);
        this.spinner = false;
      }
      );
  }


  public voltarHome() {
    this.router.navigateByUrl('');
  }

  /* paginação da lista */

  public nextPage() {

    this.spinner = true;

    if (this.currentPage <= 791) {

      this.currentPage += this.page;

      this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=', this.currentPage)
        .subscribe(
        res => {
          this.pokemon = res.json();
          this.spinner = false;
          event.preventDefault();
        },
        error => {
          console.log(error);
          this.spinner = false;
        }
        );
    } else {
      bootbox.alert('Você chegou ao final da lista!');
      this.spinner = false;
    }
  }

  public lastPage() {

    this.spinner = true;

    if (this.currentPage >= 20) {

      this.currentPage -= this.page;
      this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=', this.currentPage)
        .subscribe(
        res => {
          this.pokemon = res.json();
          this.spinner = false;
          event.preventDefault();
        },
        error => {
          console.log(error);
          this.spinner = false;
        }
        );
    } else {
      bootbox.alert('Você chegou a primeira página');
      this.spinner = false;
    }
  }

}
