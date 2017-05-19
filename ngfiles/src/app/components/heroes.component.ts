import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../services/hero.service';

import { Hero } from '../common/hero';

@Component({
	selector: 'my-heroes',
	templateUrl: 'html/heroes.component.html',
	styleUrls: ['css/heroes.component.css']
})

export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}