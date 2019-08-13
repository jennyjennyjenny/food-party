import { Component, OnInit } from '@angular/core';
import { Potluck } from '../potluck';
import {PotluckService } from '../potluck.service';

@Component({
  selector: 'app-potluck',
  templateUrl: './potluck.component.html',
  styleUrls: ['./potluck.component.css']
})
export class PotluckComponent implements OnInit {

  potlucks: Potluck[];
  demoHelp:boolean = false;
  

  constructor(private potluckService: PotluckService) { }

  ngOnInit() {
    this.getPotlucks();
  }

 

  getPotlucks(): void {
   this.potluckService.getPotlucks()
    .subscribe(potlucks => this.potlucks = potlucks);
  }

  toggleHelp() {
    this.demoHelp = !this.demoHelp;
  }

}
