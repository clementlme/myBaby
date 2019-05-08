import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = JSON.parse(localStorage.getItem('user')) || null;
    }
    UserService.prototype.getById = function (id) {
        return this.http.get(environment.api.user + id);
    };
    UserService.prototype.set = function (pseudo) {
        return this.http.post(environment.api.user, { pseudo: pseudo });
    };
    UserService.prototype.isLogged = function () {
        return (this.user) ? true : false;
    };
    UserService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map