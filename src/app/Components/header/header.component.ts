import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  //inyecto el servicio getData del PortfolioService
  constructor() { }

  ngOnInit(): void {
    //this.datosPortfolio.getData();

  }

}
