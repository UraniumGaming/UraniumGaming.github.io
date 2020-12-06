(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["raiding-raiding-module"],{

/***/ "9xrM":
/*!*******************************************!*\
  !*** ./src/app/raiding/raiding.module.ts ***!
  \*******************************************/
/*! exports provided: RaidingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidingModule", function() { return RaidingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _general_general_raiding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/general-raiding.component */ "hMd3");
/* harmony import */ var _heroic_heroic_raiding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroic/heroic-raiding.component */ "oUVy");
/* harmony import */ var _mythic_mythic_raiding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mythic/mythic-raiding.component */ "XT+M");
/* harmony import */ var _raiding_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raiding-routing.module */ "Yh0W");
/* harmony import */ var _raiding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raiding.component */ "T78w");
/* harmony import */ var _strats_raiding_strats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./strats/raiding-strats.component */ "fVWL");










class RaidingModule {
}
RaidingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RaidingModule });
RaidingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RaidingModule_Factory(t) { return new (t || RaidingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _raiding_routing_module__WEBPACK_IMPORTED_MODULE_6__["RaidingRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RaidingModule, { declarations: [_raiding_component__WEBPACK_IMPORTED_MODULE_7__["RaidingComponent"],
        _strats_raiding_strats_component__WEBPACK_IMPORTED_MODULE_8__["RaidingStratsComponent"],
        _general_general_raiding_component__WEBPACK_IMPORTED_MODULE_3__["GeneralRaidingComponent"],
        _mythic_mythic_raiding_component__WEBPACK_IMPORTED_MODULE_5__["MythicRaidingComponent"],
        _heroic_heroic_raiding_component__WEBPACK_IMPORTED_MODULE_4__["HeroicRaidingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _raiding_routing_module__WEBPACK_IMPORTED_MODULE_6__["RaidingRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RaidingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _raiding_component__WEBPACK_IMPORTED_MODULE_7__["RaidingComponent"],
                    _strats_raiding_strats_component__WEBPACK_IMPORTED_MODULE_8__["RaidingStratsComponent"],
                    _general_general_raiding_component__WEBPACK_IMPORTED_MODULE_3__["GeneralRaidingComponent"],
                    _mythic_mythic_raiding_component__WEBPACK_IMPORTED_MODULE_5__["MythicRaidingComponent"],
                    _heroic_heroic_raiding_component__WEBPACK_IMPORTED_MODULE_4__["HeroicRaidingComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _raiding_routing_module__WEBPACK_IMPORTED_MODULE_6__["RaidingRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "T78w":
/*!**********************************************!*\
  !*** ./src/app/raiding/raiding.component.ts ***!
  \**********************************************/
/*! exports provided: RaidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidingComponent", function() { return RaidingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RaidingComponent {
    activateRoute(component) {
        if (this.isOnInit(component)) {
            // tslint:disable-next-line:no-lifecycle-call
            component.ngOnInit();
        }
    }
    isOnInit(component) {
        return component.ngOnInit !== undefined;
    }
}
RaidingComponent.ɵfac = function RaidingComponent_Factory(t) { return new (t || RaidingComponent)(); };
RaidingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaidingComponent, selectors: [["app-raiding"]], hostAttrs: [1, "d-flex", "flex-fill"], decls: 1, vars: 0, consts: [[3, "activate"]], template: function RaidingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function RaidingComponent_Template_router_outlet_activate_0_listener($event) { return ctx.activateRoute($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWlkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaidingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-raiding',
                templateUrl: './raiding.component.html',
                styleUrls: ['./raiding.component.scss'],
                host: {
                    class: 'd-flex flex-fill',
                },
            }]
    }], null, null); })();


/***/ }),

/***/ "XT+M":
/*!************************************************************!*\
  !*** ./src/app/raiding/mythic/mythic-raiding.component.ts ***!
  \************************************************************/
/*! exports provided: MythicRaidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MythicRaidingComponent", function() { return MythicRaidingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/globals */ "xa+l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MythicRaidingComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mythic Team Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Here's how the mythic team operates. This is subject to change, but it's fairly established for the time being. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "23-24 person raid team. The bench will frequently rotate in based on gear and experience.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CO will maintain a roster with weekly updates on who is in for each boss and who is on the bench. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2 nights per week, 3 hour raid nights that start and end on time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cutting Edge completion before the end of tier.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "[Start of tier]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Raid and Healing lead design their ideal class comp, then make cuts based on raider trialing during heroic raid completion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bring the player, not the class.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MythicRaidingComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Becoming a Uranium Mythic Raider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Make sure you complete or meet all of the items listed below: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Meet the mythic team requirements set below. Please read them all.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fill out a mythic application.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read and agree with the general raider expectations on the other pages.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "[Start of tier]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Heroic raid will be used to trial prospective raiders. We will make cuts and announce the mythic progression roster after AOTC completion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " If you don't have recent experience of warcraft logs to meet the requirements, join a Uranium heroic raid team and reapply for the mythic team later. You may run non-Uranium heroic raids to get your logs up, but we want to see what kind of person you are prior to inviting you along for mythic progression. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Previous tier Cutting Edge raiders will be guaranteed trial spots if we have more than 30 people on the AOTC progression team. It does ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "not");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " however guarantee a spot in the next tier's progression team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MythicRaidingComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Abilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " First and foremost, it comes as no shock that a mythic raider should be the best a guild has to offer. This includes knowledge of their class, their parses, and general raid awareness, but it also means flexibility, mental resolve, and determination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dl", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Knowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " It is expected that you know how to play your class and are constantly seeking out ways to improve that gameplay experience for yourself and for the benefit of the raid group. More knowledge leads to more DPS which leads to better parses. That same though process extends to fights. Read our slides and strats and intimately familiarize yourself with them. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Parses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Parse are the best metric to understand your personal performance compared to the WoW community around the world. Because of this, it is also our best metric to determine that performance. We require parses around an 80% for heroic fights once they are on farm. That same parse level must be maintained for re-clear bosses through mythic raids as well. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "General Awareness");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " While we assure that important mechanics will be called out in a fight, we do expect that you are able to keep track of personal mechanics as well as perform to the best of your abilities. We do not want to hold everyone's hand through mythic content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Flexibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Although we will have a core roster with our main characters, there may be times when we will request a specific class or spec for fights during progression. To be much better prepared for that, we ask you to have an alt you are also proficient with that is equivalently geared. This will allow us to construct the best possible strategies for success. Being flexible on an individual level also means being able to pivot strategies as we progress into fights. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mental Resolve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " The mythic raid team is a fluid construct and subject to change. We encourage competition between players to keep everyone as sharp and competent as possible. With that said, we also analyze and correct underperformance before we look to replace players. If an officer comes to you about performance, we expect you to accept that criticism and work with them to determine the best method of increasing that performance. We're not personally attacking anyone when we do this; if we didn't think you were a good player, you wouldn't be on the team. Deflecting that responsibility or refusing to work with an officer will ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " be received well. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Determination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Mythic progression means wiping, it means strategizing on the fly when necessary, it means healers having to coordinate pre-pull on a pull-by-pull basis. It means cracking hard at attempts with a couple scheduled breaks and not much else in between. Wanting to raid mythic is accepting all of the glory, hard work, and office talk that comes with it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MythicRaidingComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Attitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " While mythic raid does require focus and concentration, it is still a community event in the guild. We should be a group that enjoys playing with each other, as opposed to a task force cobbled together to begrudgingly co-exist for 6 hours a week. Factors that play into how well mythic progression can go include: morale, eliminating elitism, willingness to improve, and personal responsibility. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dl", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Morale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Don't come to raid prepared to fail; come to raid prepared to learn and progress a fight. If you find yourself dreading mythic raid night, speak to the raid lead, melee lead, heal lead, or guild leader. We will do our best to alleviate the concern, but it may also come down to needing a break. Understand when is and is not an appropriate time to good off. If we're in the pull timer, now isn't the time to recant a funny story that happened to you. Talk and banter all the way up until a boss, during trash, when walking back from wipes. But, when it's time to crack attempts, keep spirits high and unnecessary talking to a minimum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Eliminating Elitism");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " If you're too good for our guild or our requirements, you're more than welcome to apply to Complexity Limit or Method. We will not be finger pointing, belittling, or promoting an attitude that certain people are carrying the raid team. Performance will constantly be monitored and replacements will be made if people aren't conforming to that mantra. In that same regard, an elitist attitude will not be tolerated towards other guild members. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Willingness to Improve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Until every member of the raid is parsing 100 overall on every fight, there's constantly room for improvement. If we need to squeeze a bit more out of the raid group, we will certainly facilitate that in any way we possibly can. As stated previously, if any member of the raid leadership comes forward with concerns, suggestion or critique, do not take it as a personal attack. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Personal Responsibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " During raids, if you mess up a mechanic, don't make excuses for yourself and why you couldn't do it. Own your mistake and call it out after the pull when we discuss what happened with that attempt. Bring any materials required to raid if we can't provide them that week through the guild bank. Research how you can play your class better. Stay on to pof your gear and your M+; I know it's tedious to some people, but pushing keys is the best method for acquiring gear outside of raid. We will need everyone on their toes to min-max their gear and performance, especially considering a lot of our progression time will be spent in pre-nerf raids. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MythicRaidingComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There's honestly not too much to say here: make sure you can make raid nights and can maintain attendance as outlined on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Uranium Guild Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " page and on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "General Raider Expectations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " page. Aside from that, I would encourage you to be incredibly active in the guild. Have a solid amount of online time, help other people with keys, socialize with fellow members, and promote our community. As a mythic raider, you are the ambassadors of our guild to those fresh recruits and those randoms in the M+ you pugged. Help us make this one of the best guilds on Stormrage by being the best \"YOU\" that you can be. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/guild-info/rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/raiding#schedules");
} }
function MythicRaidingComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hard Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Obviously, we do have some hard requirements for mythic raiders, and to even be considered, you will have to meet those requirements. Some of these may have previously been stated in this section, but here they are together for convenience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dl", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Parses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You are required to maintain a per-ilvl parse of 80 or higher to join the team. This can be from any logs of heroic runs inside or outside the guild. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Legendaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " You must have your best-in-slot raid legendary, no exceptions. A full list of them can be found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " on WowHead ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Item Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Bare minimum requirement here is ilvl 210 to be considered for the group. This is full gear from Mythic+ 14 and 15 keys while mixing in some heroic progression at minimum. This hard limit exists to ensure everyone is putting forth effort to get geared. If our start date for progression arrives and it seems highly unreasonable for everyone to have obtained this, there will be a change to the number to reflect something more reasonable (although this is not likely). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "dt", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Soulbinds and Conduits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "dd", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " We understand the full tree will not be available, but we do need everyone to be as far along as reasonably possible. This means you will need to be progressing through your covenant campaign, the Shadowlands campaign, and be visiting The Maw as much as is possible when it is open. Dailies, dailies, dailies people! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MythicRaidingComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "iframe", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MythicRaidingComponent {
    constructor(globals, route) {
        this.globals = globals;
        this.route = route;
    }
    ngOnInit() {
        this.globals.titleName = 'Mythic Team';
    }
}
MythicRaidingComponent.ɵfac = function MythicRaidingComponent_Factory(t) { return new (t || MythicRaidingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MythicRaidingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MythicRaidingComponent, selectors: [["mythic-raiding"]], hostAttrs: [1, "d-flex", "flex-fill"], decls: 32, vars: 4, consts: [["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "col-lg-2", "col-sm-3", "col-4", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "operation"], ["ngbNavLink", "", "routerLink", ".", "fragment", "operation"], ["ngbNavContent", ""], ["ngbNavItem", "recruitment"], ["ngbNavLink", "", "routerLink", ".", "fragment", "recruitment"], ["ngbNavItem", "abilities"], ["ngbNavLink", "", "routerLink", ".", "fragment", "abilities"], ["ngbNavItem", "attitude"], ["ngbNavLink", "", "routerLink", ".", "fragment", "attitude"], ["ngbNavItem", "availability"], ["ngbNavLink", "", "routerLink", ".", "fragment", "availability"], ["ngbNavItem", "requirements"], ["ngbNavLink", "", "routerLink", ".", "fragment", "requirements"], ["ngbNavItem", "signup", "domId", "signup-tab"], ["ngbNavLink", "", "routerLink", ".", "fragment", "signup"], [1, "ml-4", "col-lg-10", "d-flex", "flex-fill", "flex-column", 3, "ngbNavOutlet"], [1, "mb-1"], [1, "row"], [1, "my-1"], [1, "col-lg-3"], [1, "col-lg-9"], [3, "routerLink"], ["href", "https://www.wowhead.com/guides/best-legendary-all-shadowlands-dps-tank-healer-classes-raids-mythic-plus"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://docs.google.com/forms/d/e/1FAIpQLSdzlPQTX-YExmyk9wTmlt99-VsLUeQ91Kmzg-rGUAeIm5N6Gg/viewform?embedded=true"), "frameborder", "0", "marginheight", "0", "marginwidth", "0", 1, "w-100", "d-flex", "flex-fill"]], template: function MythicRaidingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function MythicRaidingComponent_Template_ul_activeIdChange_0_listener($event) { return ctx.activeItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MythicRaidingComponent_ng_template_6_Template, 20, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MythicRaidingComponent_ng_template_10_Template, 24, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Abilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MythicRaidingComponent_ng_template_14_Template, 40, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Attitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MythicRaidingComponent_ng_template_18_Template, 26, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MythicRaidingComponent_ng_template_22_Template, 11, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hard Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MythicRaidingComponent_ng_template_26_Template, 29, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MythicRaidingComponent_ng_template_30_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 17);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.route.fragment));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     #signup-tab-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215dGhpYy1yYWlkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFSIiwiZmlsZSI6Im15dGhpYy1yYWlkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAjc2lnbnVwLXRhYi1wYW5lbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MythicRaidingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mythic-raiding',
                templateUrl: './mythic-raiding.component.html',
                styleUrls: ['./mythic-raiding.component.scss'],
                host: {
                    class: 'd-flex flex-fill',
                },
            }]
    }], function () { return [{ type: app_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Yh0W":
/*!***************************************************!*\
  !*** ./src/app/raiding/raiding-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RaidingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidingRoutingModule", function() { return RaidingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _general_general_raiding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/general-raiding.component */ "hMd3");
/* harmony import */ var _heroic_heroic_raiding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroic/heroic-raiding.component */ "oUVy");
/* harmony import */ var _mythic_mythic_raiding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mythic/mythic-raiding.component */ "XT+M");
/* harmony import */ var _raiding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./raiding.component */ "T78w");
/* harmony import */ var _strats_raiding_strats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strats/raiding-strats.component */ "fVWL");









const routes = [
    {
        path: '',
        component: _raiding_component__WEBPACK_IMPORTED_MODULE_5__["RaidingComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _general_general_raiding_component__WEBPACK_IMPORTED_MODULE_2__["GeneralRaidingComponent"],
            },
            {
                path: 'mythic',
                component: _mythic_mythic_raiding_component__WEBPACK_IMPORTED_MODULE_4__["MythicRaidingComponent"],
            },
            {
                path: 'heroic',
                component: _heroic_heroic_raiding_component__WEBPACK_IMPORTED_MODULE_3__["HeroicRaidingComponent"],
            },
            {
                path: 'strats',
                component: _strats_raiding_strats_component__WEBPACK_IMPORTED_MODULE_6__["RaidingStratsComponent"],
            },
        ],
    },
];
class RaidingRoutingModule {
}
RaidingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RaidingRoutingModule });
RaidingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RaidingRoutingModule_Factory(t) { return new (t || RaidingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RaidingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaidingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fVWL":
/*!************************************************************!*\
  !*** ./src/app/raiding/strats/raiding-strats.component.ts ***!
  \************************************************************/
/*! exports provided: RaidingStratsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidingStratsComponent", function() { return RaidingStratsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/globals */ "xa+l");



class RaidingStratsComponent {
    constructor(globals) {
        this.globals = globals;
    }
    ngOnInit() {
        this.globals.titleName = 'Raiding Strats';
    }
}
RaidingStratsComponent.ɵfac = function RaidingStratsComponent_Factory(t) { return new (t || RaidingStratsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"])); };
RaidingStratsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaidingStratsComponent, selectors: [["app-raiding-strats"]], hostAttrs: [1, "d-flex", "flex-fill"], decls: 1, vars: 0, consts: [["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://docs.google.com/presentation/d/e/2PACX-1vReNz0IdoUWilk0YrtFLkWw2bNBqoLXtdO_8r4HIeMeYB8LdPOqYK-OTN7XGhtzp2PslxBgx7XYwPvi/embed?start=false&loop=false&delayms=600000"), "frameborder", "0", "allowfullscreen", "true", "mozallowfullscreen", "true", "webkitallowfullscreen", "true", 1, "w-100", "d-flex", "flex-fill"]], template: function RaidingStratsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWlkaW5nLXN0cmF0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaidingStratsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-raiding-strats',
                templateUrl: './raiding-strats.component.html',
                styleUrls: ['./raiding-strats.component.scss'],
                host: {
                    class: 'd-flex flex-fill',
                },
            }]
    }], function () { return [{ type: app_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }]; }, null); })();


/***/ }),

/***/ "hMd3":
/*!**************************************************************!*\
  !*** ./src/app/raiding/general/general-raiding.component.ts ***!
  \**************************************************************/
/*! exports provided: GeneralRaidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRaidingComponent", function() { return GeneralRaidingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/globals */ "xa+l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GeneralRaidingComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Schedules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " These times are fairly established. We encourage all raiders to be ready to go 15 minutes before raid time starts. Raid time should be just clearing bosses, not waiting for people to log on. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mythic Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tuesday: 8PM-11PM EST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Thursday: 8PM-11PM EST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Heroic Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tuesday: 7PM-10PM EST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Thursday: 7PM-10PM EST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRaidingComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "General Expectations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " These expectations hold true for both the Mythic and Heroic teams. Be sure to read these and be sure that you are willing to meet these expectations each and every night. Raid night is first and foremost for boss killing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be online on time and able to spend 3 hours uninterrupted. The raid team will not wait for you; it starts at the scheduled time and backups will take your spot. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Let the Raid Leader know if you cannot make the raid. Consistently leaving early or random AFKs will reduce the chance you'll be asked to return. No call/no shows will not be invited later in the night. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Attendance is crucial to progressing in a raid tier.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Raiders will review Uranium's PowerPoints prior to the first encounter with a boss.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Don\u2019t be impaired while we are progressing. Once a raid is on-farm, or while we are doing non-progression raiding, we don't care, so long as it doesn't negatively affect the social aspect of the group. \"On-farm\" means we can clear a raid in one night. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Raid Assistants will be picked by the Raid Leader to help them. They can promote as many as they need. Raid Assistants are priority shot callers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Raid discipline is critical. By this we mean: moving through trash efficiently, maintaining essential communications during boss pulls, and minimizing downtime between pulls. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " All raiders will have WeakAuras, Exorsus Raid Tools, and BigWigs (or DBM). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " To become a full-time raider, meet all of the noted expectations listed above, the expectations for your specific team, and show up (on time) for two consecutive weeks while participating in a raid team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " You can lose raider rank by \"no call, no showing\" for two consecutive weeks. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRaidingComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loot / BoEs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We want to be very clear and explicit when it comes to loot drops as it can be a point of contention. Our loot rules are broken up into two types: personal and BoEs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal Loot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " All personal loot belongs to the raider who looted it. They are under no obligation to trade it to any member of the raid. Traded gear will follow these rules when it is being rolled on: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Main Spec (main character)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Main Spec (side-grade)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Off Spec");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Alts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Our gearing philosophy places a higher importance on new and current member's main character above alts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BoEs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " BoE\u2019s that drop during raid night will be given to the Raid Leader and sold on the AH for guild bank revenue. However, any guild member may buy the item BoE from the guild bank at half price. You will be supplied with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " flasks, food, potions, vantus runes, and repairs needed for raiding and M+. Raiders may pull consumables out of the bank everyday as needed. This rule applies to any Uranium raider in any Uranium raid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GeneralRaidingComponent {
    constructor(globals, route) {
        this.globals = globals;
        this.route = route;
    }
    ngOnInit() {
        this.globals.titleName = 'Raiding';
    }
}
GeneralRaidingComponent.ɵfac = function GeneralRaidingComponent_Factory(t) { return new (t || GeneralRaidingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
GeneralRaidingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRaidingComponent, selectors: [["app-raiding-base"]], hostAttrs: [1, "d-flex", "flex-fill"], decls: 16, vars: 4, consts: [["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "col-lg-2", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "schedule"], ["ngbNavLink", "", "routerLink", ".", "fragment", "schedule"], ["ngbNavContent", ""], ["ngbNavItem", "expectations"], ["ngbNavLink", "", "routerLink", ".", "fragment", "expectations"], ["ngbNavItem", "loot"], ["ngbNavLink", "", "routerLink", ".", "fragment", "loot"], [1, "ml-4", "col-lg-10", "d-flex", "flex-fill", "flex-column", 3, "ngbNavOutlet"]], template: function GeneralRaidingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function GeneralRaidingComponent_Template_ul_activeIdChange_0_listener($event) { return ctx.activeItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRaidingComponent_ng_template_6_Template, 19, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Expectations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralRaidingComponent_ng_template_10_Template, 27, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Loot / BoEs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GeneralRaidingComponent_ng_template_14_Template, 27, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.route.fragment));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     .tab-pane.active {\n  display: flex !important;\n  flex: 1 1 auto !important;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dlbmVyYWwtcmFpZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUFSIiwiZmlsZSI6ImdlbmVyYWwtcmFpZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnRhYi1wYW5lLmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRaidingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-raiding-base',
                templateUrl: './general-raiding.component.html',
                styleUrls: ['./general-raiding.component.scss'],
                host: {
                    class: 'd-flex flex-fill',
                },
            }]
    }], function () { return [{ type: app_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "oUVy":
/*!************************************************************!*\
  !*** ./src/app/raiding/heroic/heroic-raiding.component.ts ***!
  \************************************************************/
/*! exports provided: HeroicRaidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroicRaidingComponent", function() { return HeroicRaidingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeroicRaidingComponent {
}
HeroicRaidingComponent.ɵfac = function HeroicRaidingComponent_Factory(t) { return new (t || HeroicRaidingComponent)(); };
HeroicRaidingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroicRaidingComponent, selectors: [["heroic-raiding"]], decls: 0, vars: 0, template: function HeroicRaidingComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroicRaidingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'heroic-raiding',
                templateUrl: './heroic-raiding.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=raiding-raiding-module.js.map