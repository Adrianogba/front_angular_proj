import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  contador = 0;

  constructor() {}

  ngOnInit(): void {}

  contarClique() {
    this.contador = this.contador + 1;
    //this.contador++;
  }

  diminuirClique(){
    this.contador = this.contador - 1;
  }
}
