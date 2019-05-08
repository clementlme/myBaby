import { Injectable } from '@angular/core';
import { User } from '../_model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    user: User = JSON.parse(localStorage.getItem('user')) || null;

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<any> {
        return this.http.get<User>(environment.api.user + id);
    }

    set(pseudo: string): Observable<any> {
        return this.http.post<User>(environment.api.user, { pseudo });
    }

    isLogged(): boolean {
        return (this.user) ? true : false;
    }

}
