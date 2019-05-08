import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var AllaitementService = /** @class */ (function () {
    function AllaitementService(http) {
        this.http = http;
    }
    AllaitementService.prototype.get = function () {
        // return JSON.parse(localStorage.getItem('allaitements'));
        return this.http.get(environment.api.breastfeeding);
    };
    AllaitementService.prototype.add = function (bosom, start, comment) {
        return this.http.post(environment.api.breastfeeding, { bosom: bosom, start: start, comment: comment, status: 0 });
    };
    AllaitementService.prototype.update = function (id, bosom, startDate, endDate, comment) {
        var allaitements = this.get().subscribe;
        for (var _i = 0, allaitements_1 = allaitements; _i < allaitements_1.length; _i++) {
            var item = allaitements_1[_i];
            if (item.id === id) {
                item.bosom = (bosom) ? bosom : item.bosom;
                item.start = (startDate) ? new Date(startDate) : item.start;
                item.end = (endDate) ? new Date(endDate) : item.end;
                item.comment = (comment !== undefined) ? comment : item.comment;
                item.status = (item.end || endDate) ? 2 : 0;
            }
        }
        localStorage.setItem('allaitements', JSON.stringify(allaitements));
    };
    AllaitementService.prototype.delete = function (id) {
        var allaitements = this.get();
        var deleted = allaitements.filter(function (value) { return value.id !== id; });
        localStorage.setItem('allaitements', JSON.stringify(deleted));
    };
    AllaitementService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AllaitementService);
    return AllaitementService;
}());
export { AllaitementService };
//# sourceMappingURL=allaitement.service.js.map