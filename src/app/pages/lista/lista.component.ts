import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lista = [
    {
      id: '1',
      year: '2007',
      cert: 'SCJP 1.5',
    },
    {
      id: '2',
      year: '2009',
      cert: 'SCWCD 1.5',
    },
    {
      id: '3',
      year: '2011',
      cert: 'CTFL',
    },
  ];
}
