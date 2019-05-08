import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChangeService {

    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get(environment.api.change);
    }

    add(date: Date, pee: boolean, poop: boolean, trace: boolean, poopRange: number, comment: string, user: string): Observable<any> {
        return this.http.post(environment.api.change, { date, pee, poop, trace, poopRange, comment, user });
    }

    update(
        id: number, date?: string, pee?: boolean, poop?: boolean, trace?: boolean, poopRange?: number, comment?: string
    ): Observable<any> {
        return this.http.patch(environment.api.change + id, { date, pee, poop, trace, poopRange, comment });
    }

    delete(id: number): Observable<any> {
        return this.http.delete(environment.api.change + id);
    }

}
