import { Component, Input } from '@angular/core';
import { Hero } from '../common/hero';

@Component({
	selector: 'hero-detail',
	templateUrl: 'html/hero-detail.html'
})

export class HeroDetailComponent {
	@Input() hero: Hero;
}