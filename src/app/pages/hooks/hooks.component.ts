import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, DoCheck {

  constructor(private service: ServiceService) {
    console.log('Constructor disparado');
  }

  ngOnInit(): void {
    console.log('ngOnInit disparado');
    this.service.getData();
  }

  ngDoCheck(): void {
    console.log('El DoCheck se ha ejecutado')
  }

  clickMethod(){
    console.log('Click method executed');
  }


}
