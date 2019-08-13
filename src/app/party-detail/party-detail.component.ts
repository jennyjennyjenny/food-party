import { Component, OnInit, Input } from '@angular/core';
import { Potluck, PartyItem } from '../potluck';
import { GroupItems } from '../partyItem.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PotluckService } from '../potluck.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css']
})
export class PartyDetailComponent implements OnInit{

  removeState = false;
  disallowedDelete = false;
  removeDish: string = '';
  checkItem: PartyItem;
  authName = new FormControl('');
  groupItems: GroupItems[];
 
  potluck: Potluck;

  


  constructor(
    private route: ActivatedRoute,
    private potluckService: PotluckService,
    private location: Location
  ) { }

  courses = [
    { id: 1, name: "Main"},
    { id: 2, name: "Appetizer"},
    { id: 3, name: "Side Dish" },
    { id: 4, name: "Dessert" },
    { id: 5, name: "Beverages" },
    { id: 6, name: "Supplies" }
  ];

  partyItemForm = new FormGroup({
    fname : new FormControl('', Validators.required),
    lname : new FormControl('', Validators.required),
    dish : new FormControl('', Validators.required),
    dishtype : new FormControl('', Validators.required),
    servings : new FormControl('', Validators.required),
  });

  

  ngOnInit(): void {
    this.getPotluck();
 
  }


  getPotluck(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.potluckService.getParty(id)
      .subscribe(potluck => this.potluck = potluck);
      // this.data = this.potluck.items;
      //this.groupItems = this.groupByType(this.potluck.items);
    
  }

  onSubmit() {
    let newItem = this.partyItemForm.value;
    //newItem.id = this.potluck.items.length + 1;
    this.potluck.items.push(newItem);
    this.potluckService.updateParty(this.potluck.id, this.potluck)
    .subscribe();
    this.partyItemForm.reset();
  }

  scrollToAdd(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth'});
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes['this.potluck.items']) {
  //     console.warn("changes fired");
  //     this.groupItems = this.groupByType(this.potluck.items);
  //   }
  //   console.warn(this.potluck.items);
  // }

  // groupByType(data: PartyItem[]): GroupItems[] {
  //   if(!data) return;

  //   const dishtypes = new Set(data.map(x => x.dishtype));
  //   const result = Array.from(dishtypes).map(x => ({
  //     dishtype: x,
  //     items: data.filter(item => item.dishtype === x)
  //   }));
  //   return result;
  // }

  startRemove(item, dishName){
    this.removeState = true;
    this.disallowedDelete = false;
    this.checkItem = item;
    this.removeDish = dishName;
    
  }

  doRemove(item) {

    if(this.checkItem.lname === this.authName.value){
      let removeIndex = this.potluck.items.findIndex(x => x.id === this.checkItem.id);
      let removedItems = this.potluck.items.splice(removeIndex, 1);
      this.potluckService.updateParty(this.potluck.id, this.potluck).subscribe();
      this.removeState = false;
    } else {
      this.disallowedDelete = true;
    }
    
    this.authName.reset();
  } 

  cancel() : void {
    this.removeState = false;
    this.authName.reset();
  }

}
