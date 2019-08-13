import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Potluck, PartyItem } from '../potluck';
import {  GroupItems } from '../partyitem.interface';
import { PotluckService } from '../potluck.service'; 
import { FormControl } from '@angular/forms';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-party-menu',
  templateUrl: './party-menu.component.html',
  styleUrls: ['./party-menu.component.css']
})
export class PartyMenuComponent implements OnInit {

  private _data = new BehaviorSubject<PartyItem[]>([]);

  removeState = false;
  disallowedDelete = false;
  removeDish: string = '';
  checkItem: PartyItem;
  authName = new FormControl('');

   @Input() potluck: Potluck;
   @Input()
   set data(value) {
     this._data.next(value);
   }

   get data() {
     return this._data.getValue();
   }
  //@Input() data: PartyItem[];
 

  groupItems: GroupItems[];

  constructor( private potluckService: PotluckService) { }

  // ngOnInit() {
  //   this.data = this.potluck.items;
  //   this.groupItems = this.groupByType(this.data);
  // }

  ngOnInit(){
    this._data
      .subscribe(x => {
        this.groupItems = this.groupByType(this.data);
      });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes['data']) {
  //     this.groupItems = this.groupByType(this.data);
  //   }
  //   console.warn(this.data);
  // }

  groupByType(data: PartyItem[]): GroupItems[] {
    if(!data) return;

    const dishtypes = new Set(data.map(x => x.dishtype));
    const result = Array.from(dishtypes).map(x => ({
      dishtype: x,
      items: data.filter(item => item.dishtype === x)
    }));
    return result;
  }

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
     // this.potluckService.updateParty(this.potluck.id, this.potluck).subscribe();
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
