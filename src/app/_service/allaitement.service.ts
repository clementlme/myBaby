import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AllaitementService {

    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get(environment.api.breastfeeding);
    }

    add(bosom: string, start: Date, comment: string, user: string): Observable<any> {
        return this.http.post(environment.api.breastfeeding, { bosom, start, comment, status: 0, user });
    }

    update(id: number, bosom?: string, start?: string, end?: string, comment?: string): Observable<any> {
        return this.http.patch(environment.api.breastfeeding + id, { bosom, start, end, comment });
    }

    delete(id: number): Observable<any> {
        return this.http.delete(environment.api.breastfeeding + id);
    }

}
