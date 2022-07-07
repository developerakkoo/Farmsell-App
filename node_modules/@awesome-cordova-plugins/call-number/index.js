var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var CallNumberOriginal = /** @class */ (function (_super) {
    __extends(CallNumberOriginal, _super);
    function CallNumberOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumberOriginal.prototype.callNumber = function (numberToCall, bypassAppChooser) { return cordova(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumberOriginal.prototype.isCallSupported = function () { return cordova(this, "isCallSupported", {}, arguments); };
    CallNumberOriginal.pluginName = "CallNumber";
    CallNumberOriginal.plugin = "call-number";
    CallNumberOriginal.pluginRef = "plugins.CallNumber";
    CallNumberOriginal.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumberOriginal.platforms = ["Android", "iOS"];
    return CallNumberOriginal;
}(AwesomeCordovaNativePlugin));
var CallNumber = new CallNumberOriginal();
export { CallNumber };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FsbC1udW1iZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEI1RCw4QkFBMEI7Ozs7SUFXeEQsK0JBQVUsYUFBQyxZQUFvQixFQUFFLGdCQUF5QjtJQVUxRCxvQ0FBZTs7Ozs7O3FCQXBEakI7RUErQmdDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBDYWxsIE51bWJlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDYWxsIGEgbnVtYmVyIGRpcmVjdGx5IGZyb20geW91ciBDb3Jkb3ZhL0lvbmljIGFwcGxpY2F0aW9uLlxuICogTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxOdW1iZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FsbC1udW1iZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGxOdW1iZXI6IENhbGxOdW1iZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNhbGxOdW1iZXIuY2FsbE51bWJlcihcIjE4MDAxMDEwMTAxXCIsIHRydWUpXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZygnTGF1bmNoZWQgZGlhbGVyIScsIHJlcykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIGxhdW5jaGluZyBkaWFsZXInLCBlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYWxsTnVtYmVyJyxcbiAgcGx1Z2luOiAnY2FsbC1udW1iZXInLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkNhbGxOdW1iZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1JvaGZvc2hvL0NvcmRvdmFDYWxsTnVtYmVyUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxOdW1iZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxscyBhIHBob25lIG51bWJlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtYmVyVG9DYWxsIFRoZSBwaG9uZSBudW1iZXIgdG8gY2FsbCBhcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjYWxsTnVtYmVyKG51bWJlclRvQ2FsbDogc3RyaW5nLCBieXBhc3NBcHBDaG9vc2VyOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgY2FsbCBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==