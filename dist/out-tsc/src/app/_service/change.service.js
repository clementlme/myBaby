import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ChangeService = /** @class */ (function () {
    function ChangeService() {
    }
    ChangeService.prototype.get = function () {
        return JSON.parse(localStorage.getItem('changes'));
    };
    ChangeService.prototype.add = function (date, pee, poop, trace, comment) {
        var changes = this.get() || [];
        var generatedID = (changes.length) ? changes[changes.length - 1].id + 1 : 1;
        var newChange = {
            id: generatedID,
            date: date,
            pee: pee,
            poop: poop,
            trace: trace,
            comment: comment,
            status: 1
        };
        changes.push(newChange);
        localStorage.setItem('changes', JSON.stringify(changes));
    };
    ChangeService.prototype.update = function (id, date, pee, poop, trace, comment) {
        var changes = this.get();
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var item = changes_1[_i];
            if (item.id === id) {
                item.date = (date) ? new Date(date) : item.date;
                item.pee = pee;
                item.poop = poop;
                item.trace = trace;
                item.comment = (comment !== undefined) ? comment : item.comment;
                item.status = 1;
            }
        }
        localStorage.setItem('changes', JSON.stringify(changes));
    };
    ChangeService.prototype.delete = function (id) {
        var changes = this.get();
        var deleted = changes.filter(function (value) { return value.id !== id; });
        localStorage.setItem('changes', JSON.stringify(deleted));
    };
    ChangeService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChangeService);
    return ChangeService;
}());
export { ChangeService };
//# sourceMappingURL=change.service.js.map