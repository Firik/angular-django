import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../common/hero';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-detail',
	templateUrl: 'html/hero-detail.component.html',
	styleUrls: ['css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
		) {}

	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => this.heroService.getHero(+params['id']))
		.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}
}