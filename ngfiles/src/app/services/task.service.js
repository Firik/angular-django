"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        // private headers = new Headers({ 'Content-Type': 'application/json' });
        this.backendServer = 'http://175.18.18.5:8000/';
        this.url = 'api/tasks';
    }
    TaskService.prototype.getTasksByCurrentWeek = function () {
        var options = new http_1.RequestOptions();
        var currentWeek = '';
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
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
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map