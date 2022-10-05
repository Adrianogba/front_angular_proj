import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  exibirImagem = false;
  nome: string = 'Breno Vieira';
  info: string = 'MBA-Full Stack';
  imagem: string =
    'https://media-exp1.licdn.com/dms/image/C5603AQEGD59Nvb5Qyg/profile-displayphoto-shrink_800_800/0/1638418936461?e=1665619200&v=beta&t=-nMw8qBxxVftyEJpQK9qA8iNPW6FNaL7t4VeHjHcgsY';

  constructor() {}

  ngOnInit(): void {}

  mePague() {
    alert('Você não tem saldo suficiente');
  }

  exibirImage() {
    this.exibirImagem = true;
  }

  ocultarImage() {
    this.exibirImagem = false;
  }
}
