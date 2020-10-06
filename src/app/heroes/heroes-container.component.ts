import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {multiScan} from 'rxjs-multi-scan';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-heroes-container',
  templateUrl: './heroes-container.component.html',
  styleUrls: ['./heroes-container.component.css']
})
export class HeroesContainerComponent implements OnInit {

  private _add = new Subject<Hero>();
  private _remove = new Subject<Hero>();

  heroes$ = multiScan(
    this._heroService.getHeroes(), (heroes, loaded) => heroes.concat(loaded),
    this._add, (heroes, hero) => heroes.concat(hero),
    this._remove, (heroes, hero) => heroes.filter(item => item !== hero),
    [] as Hero[]);


  constructor(private _heroService: HeroService) { }

  ngOnInit(): void {
  }

  onAdd(name: string) {
    this._heroService.addHero({name} as Hero)
      .subscribe((hero) => this._add.next(hero))
  }

  onRemove(hero: Hero) {
    this._remove.next(hero)
    this._heroService.deleteHero(hero).subscribe(
      (hero) => {},
      () => this._add.next(hero)
    )
  }
}
