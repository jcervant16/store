import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiWebService } from 'src/app/services/data-api-web.service';
import { FuncionesService } from '../../../services/funciones.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private funciones: FuncionesService,
    private api:DataApiWebService
  ) {
   
  }

  ngOnInit() {

  }



}
