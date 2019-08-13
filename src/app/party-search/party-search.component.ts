import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import * as potluck from '../potluck';
import { PotluckService } from '../potluck.service';

@Component({
  selector: 'app-party-search',
  templateUrl: './party-search.component.html',
  styleUrls: ['./party-search.component.css']
})
export class PartySearchComponent implements OnInit {

  potlucks$: Observable<potluck.Potluck[]>;
  private searchTerms = new Subject<string>();

  constructor(private potluckService: PotluckService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() :void {
    this.potlucks$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.potluckService.findParty(term))
    );
  }

}
