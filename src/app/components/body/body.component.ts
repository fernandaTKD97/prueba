import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar: boolean= true;
  dia:number=1;

  frase:any={
    autor:"Galeileo Galielei",
    mensaje:"No se puede hacer no se que"
  };

  cientificos: string []=["Galileo Galilei", "Marie Curie", "Charles Darwin", "Neil"]
  

  constructor() { }

  ngOnInit(): void {
  }

}
