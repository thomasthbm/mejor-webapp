import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    private serviceUrl: string = 'http://localhost:5000/';

    constructor(private http: Http) { }

    createUser(data: any) {
        return this.http
        .post(this.serviceUrl + 'user', data)
        .map((res: Response) => res.json());
    }

    checkUser(data: any){
        return this.http
        .get(this.serviceUrl + 'user/' + data.email)
        .map((res: Response) => res.json());
    }

    getAvailableDates(){
        return this.http
        .get(this.serviceUrl + 'calendar/available')
        .map((res: Response) => res.json());
    }

    createSchedule(data: any) {
        return this.http
        .post(this.serviceUrl + 'schedule', data)
        .map((res: Response) => res.json());
    }

}