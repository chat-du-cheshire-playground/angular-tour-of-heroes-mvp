import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {
  heroes$ = this._heroService.getHeroes().pipe(map((heroes) => heroes.slice(1, 5)));

  constructor(private _heroService: HeroService) {
  }

  ngOnInit(): void {
  }

}
