import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministry-bazaar',
  templateUrl: './ministry-bazaar.component.html',
  styleUrls: ['./ministry-bazaar.component.scss']
})
export class MinistryBazaarComponent implements OnInit {

  readonly image = '../../assets/ministry-bazaar/bg.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
