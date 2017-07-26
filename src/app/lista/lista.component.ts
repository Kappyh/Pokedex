import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "app/home/home.component";
import { HttpService } from "app/resources/http.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {

  public pokemon: any = [{ results: { name: undefined, url: undefined } }];
  public page: number = 20;
  public currentPage: number = 20;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    /* inicia a listagem */
    this.httpService.get('http://pokeapi.co/api/v2/', 'pokemon')
      .subscribe(
      res => {
        this.pokemon = res.json();
      },
      error => {
        console.log(error);
      }
      );
  }


  /* paginação da lista */

  public nextPage() {

    if (this.currentPage <= 791) {

      this.currentPage += this.page;

      this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=', this.currentPage)
        .subscribe(
        res => {
          this.pokemon = res.json();
          event.preventDefault();
        },
        error => {
          console.log(error);
        }
        );
    } else {
      bootbox.alert('Você chegou ao final da lista!');
    }
  }

  public lastPage() {

    if (this.currentPage >= 20) {

      this.currentPage -= this.page;
      this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=', this.currentPage)
        .subscribe(
        res => {
          this.pokemon = res.json();
          event.preventDefault();
        },
        error => {
          console.log(error);
        }
        );
    } else {
      bootbox.alert('Você chegou a primeira página');
    }
  }

}
