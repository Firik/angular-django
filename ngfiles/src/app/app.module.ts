import { NgModule }			from '@angular/core';
import { FormsModule }		from '@angular/forms';
import { BrowserModule }	from '@angular/platform-browser';
import { HttpModule }		from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  		from './components/app.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroesComponent } 		from './components/heroes.component';
import { DashboardComponent } 	from './components/dashboard.component';

import { HeroService } from './services/hero.service';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
		AppRoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
	],

	declarations: [ 
		AppComponent, 
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent
	],
	
	bootstrap:    [ AppComponent ],

	providers: [ HeroService ]
})

export class AppModule { }
