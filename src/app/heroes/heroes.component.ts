import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  @Input() heroes: Hero[];

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<Hero>();

  onAdd(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.add.emit(name);
  }

  onDelete(hero: Hero): void {
    this.remove.emit(hero);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
