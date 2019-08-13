import { Component, OnInit } from '@angular/core';
import { Potluck } from '../potluck';
import { ActivatedRoute } from '@angular/router';
import { PotluckService } from '../potluck.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-party',
    templateUrl: './create-party.component.html',
    providers: [PotluckService]
})

export class CreatePartyComponent implements OnInit {

  newPartyName:string = '';
  newPotluck: Potluck;
  newPartyLink:string = '';
  createSuccess:boolean = false;
  newPartyID: number;
  potlucks: Potluck[];
  newPartyDetails:Potluck;

  

    constructor(
        private route: ActivatedRoute,
        private potluckService: PotluckService,
       
      ) { }

      ngOnInit() {
        this.getPotlucks();
      }
    
     
    
      getPotlucks(): void {
       this.potluckService.getPotlucks()
        .subscribe(potlucks => this.potlucks = potlucks);
      }

      createPartyForm = new FormGroup({
        hostfname : new FormControl('', Validators.required),
        hostlname : new FormControl('', Validators.required),
        hostemail : new FormControl('', Validators.required),
        name : new FormControl('', Validators.required),
        partydate : new FormControl('', Validators.required),
        partytime : new FormControl('', Validators.required),
        hostmessage : new FormControl(''),
    });

      onSubmit() {
       
          let newParty = this.createPartyForm.value;
          newParty.items = [];
          this.potluckService.addParty(newParty)
          .subscribe(
           (data) => this.newPartyDetails = data
          );
          this.newPartyName = newParty.name;
          this.createPartyForm.reset();
          this.showNewParty();
      }

      showNewParty() {
        
        this.createSuccess = true;
        this.newPartyID = this.newPartyDetails.id;
      }
  
}