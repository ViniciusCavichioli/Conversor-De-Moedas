import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor-de-moedas',
  templateUrl: './conversor-de-moedas.component.html',
  styleUrls: ['./conversor-de-moedas.component.css']
})
export class ConversorDeMoedasComponent implements OnInit {
    @Input()
    Real = null;

    saida = null;
  constructor() { }

  ngOnInit() {
      this.saida = this.Real * 3.55;
  }

}
