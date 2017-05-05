import { NgModule }       from '@angular/core';
import { FormsModule } 	  from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './components/app.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent } from './components/heroes.component';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
		RouterModule.forRoot([
		  {
		    path: 'heroes',
		    component: HeroesComponent
		  }
		])
	],

	declarations: [ 
		AppComponent, 
		HeroDetailComponent,
		HeroesComponent
	],
	
	bootstrap:    [ AppComponent ]
})

export class AppModule { }
