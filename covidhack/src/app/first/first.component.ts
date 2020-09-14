import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  Response : any;
  Recieve : any;
  Total : any;
  Medical : any;
  select : any;
  constructor(private _service : ApiService) { }

  ngOnInit(): void {
   
    this._service.getContact().subscribe(data => {this.Response = data;
      console.log(data);


  })

  this._service.getNotify().subscribe(data => {this.Recieve = data;
  console.log(data);
  })

  this._service.getBed().subscribe(data => {this.Total = data;
    console.log(data);
    })


    this._service.getCollege().subscribe(data => {this.Medical = data;
      console.log(data);
    })
}
}