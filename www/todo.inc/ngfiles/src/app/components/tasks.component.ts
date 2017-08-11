import { Component, OnInit } from '@angular/core';

import { Task } from '../common/task';
import { TaskService } from '../services/task.service';

@Component({
	selector: 'tasks',
	templateUrl: 'html/tasks.component.html',
	styleUrls: ['css/tasks.component.css']
})

export class TasksComponent implements OnInit {
	tasks: Task[];
	
	constructor(
		private taskService: TaskService
	) {	}
	
	ngOnInit() {
		this.getTasksByCurrentWeek();
	}
	
	getTasksByCurrentWeek(): void {
		this.taskService.getTasksByCurrentWeek().then(
			tasks => this.tasks = tasks
		);
	}
}