import { Component, OnInit } from '@angular/core';

import { HeroService } from '../services/hero.service';

import { Hero } from '../common/hero';

@Component({
	selector: 'my-heroes',
	templateUrl: 'html/my-heroes.html',
	styleUrls: ['css/styles.css'],
	providers: [HeroService]
})

export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
}