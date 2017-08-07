import { Task } from '../common/task';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
	// private headers = new Headers({ 'Content-Type': 'application/json' });
	private url = 'api/tasks';

	constructor(private http: Http) { }

	getTasksByCurrentWeek(): Promise<Task[]> {
		let options = new RequestOptions();

		let currentWeek = '';


		return this.http.get(this.url)
		.toPromise()
		.then(response => {
			return response.json().data as Task[];
		})
		.catch(this.handleError);
	}

	// getAllTasks(): Promise<Task[]> {
	// 	return this.http.get(this.url)
	// 	.toPromise()
	// 	.then(response => response.json().data as Task[])
	// 	.catch(this.handleError);
	// }

	// getTasksByDate(): Promise<Task[]> {
	// 	return this.http.get(this.url)
	// 	.toPromise()
	// 	.then(response => {
	// 		return response.json().data as Task[];
	// 	})
	// 	.catch(this.handleError);
	// }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}