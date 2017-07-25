import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "app/home/home.component";
import { HttpService } from "app/resources/http.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {

  public pokemon = [{ results: { name: undefined, url: undefined } }];
  public pageUp: number = 20;
  public pageDown: number = 20;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

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

  public nextPage() {
    this.pageUp += 20;
    this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=', this.pageUp)
      .subscribe(
      res => {
        console.log(this.pageUp);
        this.pokemon = res.json();
        event.preventDefault();
      },
      error => {
        console.log('ahh');
        console.log(error);
      }
      );
  }
  public lastPage() {
    this.pageDown -= 20;
    this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=', this.pageDown)
      .subscribe(
      res => {
        console.log(this.pageDown);
        this.pokemon = res.json();
        event.preventDefault();
      },
      error => {
        console.log(error);
      }
      );
  }

}
