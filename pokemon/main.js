(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\proyectos\pokemon\src\main.ts */"zUnb");


/***/ }),

/***/ "0zwn":
/*!*************************************************************************!*\
  !*** ./src/app/components/pokemon-catalog/pokemon-catalog.component.ts ***!
  \*************************************************************************/
/*! exports provided: PokemoCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemoCatalogComponent", function() { return PokemoCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");










function PokemoCatalogComponent_mat_card_11_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r3.type.name);
} }
function PokemoCatalogComponent_mat_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemoCatalogComponent_mat_card_11_mat_list_item_5_Template, 2, 1, "mat-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", pokemon_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pokemon_r1.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokemon_r1.sprites.other.dream_world.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PokemoCatalogComponent {
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.pokemons = [];
    }
    ngOnInit() {
        this.getData(0, 20);
    }
    getData(offset, limit) {
        this.dataService.getData(offset, limit)
            .subscribe((data) => {
            data.results.map((pokemon) => {
                this.getPokemon(pokemon.url, 1);
            });
            this.pokemons = [];
            this.lenPokemons = data.count;
        });
    }
    getPokemon(link, id) {
        this.dataService.getPokemon(link, id)
            .subscribe((data) => {
            this.pokemons.push(data);
        });
    }
    onPaginate(pageEvent) {
        const limit = pageEvent.pageSize;
        const offset = limit * pageEvent.pageIndex++;
        this.getData(offset, limit);
    }
}
PokemoCatalogComponent.ɵfac = function PokemoCatalogComponent_Factory(t) { return new (t || PokemoCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PokemoCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemoCatalogComponent, selectors: [["pokemon-catalog"]], decls: 13, vars: 3, consts: [[1, "container"], ["color", "primary"], [1, "section"], [1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", ""], [1, "row-cards"], ["class", "pokemon-card", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "page"], [1, "pokemon-card"], [1, "pokemon-card-link", 3, "routerLink"], [1, "pokemon-card-title"], [1, "type-list-items"], ["class", "type-list-item", 4, "ngFor", "ngForOf"], [1, "pokemon-img"], [3, "src"], [1, "type-list-item"]], template: function PokemoCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pok\u00E9mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buscar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PokemoCatalogComponent_mat_card_11_Template, 8, 4, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-paginator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PokemoCatalogComponent_Template_mat_paginator_page_12_listener($event) { return ctx.onPaginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.lenPokemons)("pageSize", 20);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 2rem 1.2rem;\n}\n.row-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  float: none;\n}\n.row-cards[_ngcontent-%COMP%]:after, .row-cards[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  float: none;\n  clear: both;\n}\n.pokemon-card[_ngcontent-%COMP%] {\n  *zoom: 1;\n  float: left;\n  clear: none;\n  text-align: inherit;\n  width: 48.5%;\n  margin-left: 0%;\n  margin-right: 3%;\n  position: relative;\n  background: #f2f2f2;\n  margin-bottom: 0.5rem;\n  padding: 0;\n  border-radius: 1rem;\n}\n.pokemon-card[_ngcontent-%COMP%]:before, .pokemon-card[_ngcontent-%COMP%]:after {\n  content: '';\n  display: table;\n}\n.pokemon-card[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.pokemon-card[_ngcontent-%COMP%]:nth-child(2n) {\n  margin-right: 0%;\n  float: right;\n}\n.pokemon-card[_ngcontent-%COMP%]:nth-child(2n+1) {\n  clear: both;\n}\n.pokemon-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 8rem;\n  padding: 1rem;\n  color: #000;\n  text-decoration: none;\n}\n.pokemon-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.type-list-items[_ngcontent-%COMP%] {\n  max-width: 5rem;\n  margin: 0;\n  padding: 0;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item.type-list-item[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.05);\n  display: inline-block;\n  width: auto;\n  height: auto;\n  margin: 0.2rem 0;\n  padding: 0.2rem;\n  font-size: 0.8rem;\n  text-transform: capitalize;\n  border-radius: 0.3rem;\n}\n.pokemon-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 43%;\n  right: 0.2rem;\n  bottom: 0;\n}\n.pokemon-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 6rem;\n}\n\n@media screen and (min-width: 1000px) {\n  .section[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .pokemon-card[_ngcontent-%COMP%] {\n    *zoom: 1;\n    float: left;\n    clear: none;\n    text-align: inherit;\n    width: 17.6%;\n    margin-left: 0%;\n    margin-right: 3%;\n    margin-bottom: 2rem;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:before, .pokemon-card[_ngcontent-%COMP%]:after {\n    content: '';\n    display: table;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:after {\n    clear: both;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(2n) {\n    margin-right: 3%;\n    float: left;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(2n+1) {\n    clear: none;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(5n) {\n    margin-right: 0%;\n    float: right;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(5n+1) {\n    clear: both;\n  }\n}\n@media screen and (max-width: 1000px) and (min-width: 801px) {\n  .pokemon-card[_ngcontent-%COMP%] {\n    *zoom: 1;\n    float: left;\n    clear: none;\n    text-align: inherit;\n    width: 22.75%;\n    margin-left: 0%;\n    margin-right: 3%;\n    margin-bottom: 2rem;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:before, .pokemon-card[_ngcontent-%COMP%]:after {\n    content: '';\n    display: table;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:after {\n    clear: both;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(2n) {\n    margin-right: 3%;\n    float: left;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(2n+1) {\n    clear: none;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(4n) {\n    margin-right: 0%;\n    float: right;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(4n+1) {\n    clear: both;\n  }\n}\n\n@media screen and (max-width: 800px) and (min-width: 500px) {\n  .pokemon-card[_ngcontent-%COMP%] {\n    *zoom: 1;\n    float: left;\n    clear: none;\n    text-align: inherit;\n    width: 31.33333333333333%;\n    margin-left: 0%;\n    margin-right: 3%;\n    margin-bottom: 1.5rem;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:before, .pokemon-card[_ngcontent-%COMP%]:after {\n    content: '';\n    display: table;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:after {\n    clear: both;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(2n) {\n    margin-right: 3%;\n    float: left;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(2n+1) {\n    clear: none;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(3n) {\n    margin-right: 0%;\n    float: right;\n  }\n  .pokemon-card[_ngcontent-%COMP%]:nth-child(3n+1) {\n    clear: both;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tY2F0YWxvZy5jb21wb25lbnQuc3R5bCIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGplZXRcXHN0eWx1c1xcamVldFxcX2dyaWQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFXO0FBRGY7QUFHQTtFQUNJLGlCQUFVO0VBQ1YsV0FBTTtFQUNOLGNBQU87RUFDUCxvQkFBUTtBQURaO0FBR0E7RUFDSSxhQUFRO0VBQ1IsZUFBVTtFQUNWLFdBQU07QUFEVjtBQUdJOztFQUVJLFdBQVE7RUFDUixjQUFRO0VBQ1IsV0FBTTtFQUNOLFdBQU07QUFEZDtBQUdBO0dDc1FHLE9BQU07RUFuUVAsV0FBTztFQUNQLFdBQU87RUFDUCxtQkFBWTtFQUNaLFlBQXNCO0VBQ1YsZUFBSTtFQUNLLGdCQUFJO0VETnZCLGtCQUFTO0VBQ1QsbUJBQVc7RUFDWCxxQkFBYztFQUNkLFVBQVM7RUFDVCxtQkFBYztBQUtsQjtBQzZQRTs7RUFDRSxXQUFTO0VBQ1QsY0FBUztBRDFQYjtBQzRQRTtFQUNFLFdBQU87QUQxUFg7QUNESTtFQUN1QixnQkFBSTtFQUN6QixZQUFPO0FER2I7QUNGSTtFQUNFLFdBQU87QURJYjtBQWxCSTtFQUNJLGNBQVE7RUFDUixnQkFBVztFQUNYLGFBQVE7RUFDUixXQUFNO0VBQ04scUJBQWlCO0FBb0J6QjtBQWxCQTtFQUNJLGVBQVU7RUFDVixnQkFBWTtFQUNaLDBCQUFlO0FBb0JuQjtBQWxCQTtFQUNJLGVBQVU7RUFDVixTQUFPO0VBQ1AsVUFBUTtBQW9CWjtBQWxCQTtFQUNJLDRCQUFXO0VBQ1gscUJBQVE7RUFDUixXQUFNO0VBQ04sWUFBTztFQUNQLGdCQUFPO0VBQ1AsZUFBUTtFQUNSLGlCQUFVO0VBQ1YsMEJBQWU7RUFDZixxQkFBYztBQW9CbEI7QUFsQkE7RUFDSSxrQkFBUztFQUNULFVBQU07RUFDTixhQUFNO0VBQ04sU0FBTztBQW9CWDtBQWxCSTtFQUNJLGVBQVU7RUFDVixnQkFBVztBQW9CbkI7QUFqQkE7OztFQXFCRTtBQWhCb0M7RUFFbEM7SUFDSSxhQUFRO0VBaUJkO0VBZkU7S0M2TUQsT0FBTTtJQW5RUCxXQUFPO0lBQ1AsV0FBTztJQUNQLG1CQUFZO0lBQ1osWUFBc0I7SUFDVixlQUFJO0lBQ0ssZ0JBQUk7SURtRG5CLG1CQUFjO0VBdUJwQjtFQ3NMQTs7SUFDRSxXQUFTO0lBQ1QsY0FBUztFRG5MWDtFQ3FMQTtJQUNFLFdBQU87RURuTFQ7RUMvRUU7SUFDdUIsZ0JBQUk7SUFDekIsV0FBTztFRGlGWDtFQ2hGRTtJQUNFLFdBQU87RURrRlg7RUMvRUU7SUFDdUIsZ0JBQUk7SUFDekIsWUFBTztFRGlGWDtFQ2hGRTtJQUNFLFdBQU87RURrRlg7QUFDRjtBQTVDK0Q7RUFDM0Q7S0N3TUQsT0FBTTtJQW5RUCxXQUFPO0lBQ1AsV0FBTztJQUNQLG1CQUFZO0lBQ1osYUFBc0I7SUFDVixlQUFJO0lBQ0ssZ0JBQUk7SUR3RG5CLG1CQUFjO0VBb0RwQjtFQ29KQTs7SUFDRSxXQUFTO0lBQ1QsY0FBUztFRGpKWDtFQ21KQTtJQUNFLFdBQU87RURqSlQ7RUNqSEU7SUFDdUIsZ0JBQUk7SUFDekIsV0FBTztFRG1IWDtFQ2xIRTtJQUNFLFdBQU87RURvSFg7RUNqSEU7SUFDdUIsZ0JBQUk7SUFDekIsWUFBTztFRG1IWDtFQ2xIRTtJQUNFLFdBQU87RURvSFg7QUFDRjtBQXpFQTs7O0VBNkVFO0FBeEUyRDtFQUV6RDtLQzZMRCxPQUFNO0lBblFQLFdBQU87SUFDUCxXQUFPO0lBQ1AsbUJBQVk7SUFDWix5QkFBc0I7SUFDVixlQUFJO0lBQ0ssZ0JBQUk7SURtRW5CLHFCQUFjO0VBK0VwQjtFQzhHQTs7SUFDRSxXQUFTO0lBQ1QsY0FBUztFRDNHWDtFQzZHQTtJQUNFLFdBQU87RUQzR1Q7RUN2SkU7SUFDdUIsZ0JBQUk7SUFDekIsV0FBTztFRHlKWDtFQ3hKRTtJQUNFLFdBQU87RUQwSlg7RUN2SkU7SUFDdUIsZ0JBQUk7SUFDekIsWUFBTztFRHlKWDtFQ3hKRTtJQUNFLFdBQU87RUQwSlg7QUFDRiIsImZpbGUiOiJwb2tlbW9uLWNhdGFsb2cuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdub2RlX21vZHVsZXMvamVldC9zdHlsdXMvamVldC9pbmRleCdcclxuXHJcbipcclxuICAgIGJveC1zaXppbmcgYm9yZGVyLWJveFxyXG5cclxuLnNlY3Rpb25cclxuICAgIG1heC13aWR0aCAxMjAwcHhcclxuICAgIHdpZHRoIDEwMCVcclxuICAgIG1hcmdpbiAwIGF1dG9cclxuICAgIHBhZGRpbmcgMnJlbSAxLjJyZW1cclxuXHJcbi5yb3ctY2FyZHNcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC13cmFwIHdyYXBcclxuICAgIGZsb2F0IG5vbmVcclxuXHJcbiAgICAmOmFmdGVyLFxyXG4gICAgJjpiZWZvcmVcclxuICAgICAgICBjb250ZW50ICcnXHJcbiAgICAgICAgZGlzcGxheSBibG9ja1xyXG4gICAgICAgIGZsb2F0IG5vbmVcclxuICAgICAgICBjbGVhciBib3RoXHJcblxyXG4ucG9rZW1vbi1jYXJkXHJcbiAgICBjb2woMS8yLCBjeWNsZTogMilcclxuICAgIHBvc2l0aW9uIHJlbGF0aXZlXHJcbiAgICBiYWNrZ3JvdW5kICNmMmYyZjJcclxuICAgIG1hcmdpbi1ib3R0b20gLjVyZW1cclxuICAgIHBhZGRpbmcgIDBcclxuICAgIGJvcmRlci1yYWRpdXMgMXJlbVxyXG5cclxuICAgIGFcclxuICAgICAgICBkaXNwbGF5IGJsb2NrXHJcbiAgICAgICAgbWluLWhlaWdodCA4cmVtXHJcbiAgICAgICAgcGFkZGluZyAxcmVtXHJcbiAgICAgICAgY29sb3IgYmxhY2tcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gIG5vbmVcclxuXHJcbi5wb2tlbW9uLWNhcmQtdGl0bGVcclxuICAgIGZvbnQtc2l6ZSAxcmVtXHJcbiAgICBmb250LXdlaWdodCA2MDBcclxuICAgIHRleHQtdHJhbnNmb3JtIGNhcGl0YWxpemVcclxuXHJcbi50eXBlLWxpc3QtaXRlbXNcclxuICAgIG1heC13aWR0aCA1cmVtXHJcbiAgICBtYXJnaW4gMFxyXG4gICAgcGFkZGluZyAwXHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbS50eXBlLWxpc3QtaXRlbVxyXG4gICAgYmFja2dyb3VuZCByZ2JhKGJsYWNrLCAuMDUpXHJcbiAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgd2lkdGggYXV0b1xyXG4gICAgaGVpZ2h0IGF1dG9cclxuICAgIG1hcmdpbiAuMnJlbSAwXHJcbiAgICBwYWRkaW5nIC4ycmVtXHJcbiAgICBmb250LXNpemUgLjhyZW1cclxuICAgIHRleHQtdHJhbnNmb3JtIGNhcGl0YWxpemVcclxuICAgIGJvcmRlci1yYWRpdXMgLjNyZW1cclxuXHJcbi5wb2tlbW9uLWltZ1xyXG4gICAgcG9zaXRpb24gYWJzb2x1dGVcclxuICAgIHdpZHRoIDQzJVxyXG4gICAgcmlnaHQgLjJyZW1cclxuICAgIGJvdHRvbSAwXHJcblxyXG4gICAgaW1nXHJcbiAgICAgICAgbWF4LXdpZHRoIDEwMCVcclxuICAgICAgICBtYXgtaGVpZ2h0IDZyZW1cclxuXHJcblxyXG4vKiAgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gXHJcbiAqXHRERVNLVE9QIEFORCBVUFxyXG4gKiAgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDogMTAwMHB4IClcclxuXHJcbiAgICAuc2VjdGlvblxyXG4gICAgICAgIHBhZGRpbmcgMnJlbVxyXG4gICAgXHJcbiAgICAucG9rZW1vbi1jYXJkXHJcbiAgICAgICAgY29sKDEvNSwgdW5jeWNsZTogMiwgY3ljbGU6IDUpXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSAycmVtXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogMTAwMHB4ICkgYW5kICggbWluLXdpZHRoOiA4MDFweCApXHJcbiAgICAucG9rZW1vbi1jYXJkXHJcbiAgICAgICAgY29sKDEvNCwgdW5jeWNsZTogMiwgY3ljbGU6IDQpXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSAycmVtXHJcblxyXG4vKiAgLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gXHJcbiAqXHRUQUJMRVRcclxuICogIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcbiAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDgwMHB4ICkgYW5kICggbWluLXdpZHRoIDUwMHB4IClcclxuXHJcbiAgICAucG9rZW1vbi1jYXJkXHJcbiAgICAgICAgY29sKDEvMywgdW5jeWNsZTogMiwgY3ljbGU6IDMpXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSAxLjVyZW1cclxuIiwiLyoqXG4gKiBTdHlsZSBhbiBlbGVtZW50IGFzIGEgY29sdW1uIHdpdGggYSBndXR0ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhdGlvcz0xXSAtIEEgd2lkdGggcmVsYXRpdmUgdG8gaXRzIGNvbnRhaW5lciBhcyBhIGZyYWN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBBIG9mZnNldCBzcGVjaWZpZWQgYXMgYSBmcmFjdGlvbiAoc2VlIHJhdGlvcykuXG4gKiBAcGFyYW0ge251bWJlcn0gW2N5Y2xlPTBdIC0gRWFzaWx5IGNyZWF0ZSBhbiBudGggY29sdW1uIGdyaWQgd2hlcmUgY3ljbGUgZXF1YWxzIHRoZSBudW1iZXIgb2YgY29sdW1ucy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdW5jeWNsZT0wXSAtIFVuZG8gYSBwcmV2aW91cyBjeWNsZSB2YWx1ZSB0byBhbGxvdyBmb3IgYSBuZXcgb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IFtndXR0ZXI9amVldC5ndXR0ZXJdIC0gU3BlY2lmeSB0aGUgZ3V0dGVyIHdpZHRoIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgY29udGFpbmVycyB3aWR0aC5cbiAqL1xuY29sdW1uKHJhdGlvcyA9IDEsIG9mZnNldCA9IDAsIGN5Y2xlID0gMCwgdW5jeWNsZSA9IDAsIGd1dHRlciA9IGplZXQuZ3V0dGVyKVxuICBzaWRlID0gamVldC1nZXQtbGF5b3V0LWRpcmVjdGlvbigpXG4gIG9wcG9zaXRlLXNpZGUgPSBvcHBvc2l0ZS1wb3NpdGlvbihzaWRlKVxuICBjb2x1bW4td2lkdGhzID0gamVldC1nZXQtY29sdW1uKHJhdGlvcywgZ3V0dGVyKVxuICBtYXJnaW4tbGFzdCA9IDBcbiAgbWFyZ2luLWwgPSBtYXJnaW4tbGFzdFxuICBtYXJnaW4tciA9IGNvbHVtbi13aWR0aHNbMV1cblxuICB1bmxlc3Mgb2Zmc2V0ID09IDBcbiAgICBpZiBvZmZzZXQgPCAwXG4gICAgICBvZmZzZXQgKj0gLTFcbiAgICAgIG9mZnNldCA9IGplZXQtZ2V0LWNvbHVtbihvZmZzZXQsIGNvbHVtbi13aWR0aHNbMV0pWzBdXG4gICAgICBtYXJnaW4tciA9IG1hcmdpbi1sYXN0ID0gb2Zmc2V0ICsgY29sdW1uLXdpZHRoc1sxXSAqIDJcbiAgICBlbHNlXG4gICAgICBvZmZzZXQgPSBqZWV0LWdldC1jb2x1bW4ob2Zmc2V0LCBjb2x1bW4td2lkdGhzWzFdKVswXVxuICAgICAgbWFyZ2luLWwgPSBvZmZzZXQgKyBjb2x1bW4td2lkdGhzWzFdXG5cbiAgY2YoKVxuICBmbG9hdDogc2lkZVxuICBjbGVhcjogbm9uZVxuICB0ZXh0LWFsaWduOiBpbmhlcml0XG4gIHdpZHRoOiAoY29sdW1uLXdpZHRoc1swXSklXG4gIG1hcmdpbi17c2lkZX06IChtYXJnaW4tbCklXG4gIG1hcmdpbi17b3Bwb3NpdGUtc2lkZX06IChtYXJnaW4tciklXG5cbiAgaWYgdW5jeWNsZSAhPSAwXG4gICAgJjpudGgtY2hpbGQoe3VuY3ljbGV9bilcbiAgICAgIG1hcmdpbi17b3Bwb3NpdGUtc2lkZX06IChtYXJnaW4tciklXG4gICAgICBmbG9hdDogc2lkZVxuICAgICY6bnRoLWNoaWxkKHt1bmN5Y2xlfW4rMSlcbiAgICAgIGNsZWFyOiBub25lXG5cbiAgaWYgY3ljbGUgIT0gMFxuICAgICY6bnRoLWNoaWxkKHtjeWNsZX1uKVxuICAgICAgbWFyZ2luLXtvcHBvc2l0ZS1zaWRlfTogKG1hcmdpbi1sYXN0KSVcbiAgICAgIGZsb2F0OiBvcHBvc2l0ZS1zaWRlXG4gICAgJjpudGgtY2hpbGQoe2N5Y2xlfW4rMSlcbiAgICAgIGNsZWFyOiBib3RoXG4gICBlbHNlXG4gICAgJjpsYXN0LWNoaWxkXG4gICAgICBtYXJnaW4te29wcG9zaXRlLXNpZGV9OiAobWFyZ2luLWxhc3QpJVxuXG4vKipcbiAqIEFuIGFsaWFzIGZvciB0aGUgY29sdW1uIG1peGluLlxuICovXG5jb2wgPSBjb2x1bW5cblxuLyoqXG4gKiBHZXQgdGhlIHdpZHRoIG9mIGEgY29sdW1uIGFuZCBub3RoaW5nIGVsc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhdGlvcz0xXSAtIEEgd2lkdGggcmVsYXRpdmUgdG8gaXRzIGNvbnRhaW5lciBhcyBhIGZyYWN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtnPWplZXQuZ3V0dGVyXSAtIFNwZWNpZnkgdGhlIGd1dHRlciB3aWR0aCBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGNvbnRhaW5lcnMgd2lkdGguXG4gKi9cbmNvbHVtbi13aWR0aChyYXRpb3MgPSAxLCBnID0gamVldC5ndXR0ZXIpXG4gIHJhdGlvcyA9IGplZXQtcmV2ZXJzZShyYXRpb3MpIHVubGVzcyBqZWV0LnBhcmVudC1maXJzdCBpcyB0cnVlXG4gIHcgPSAxMDBcblxuICBmb3IgcmF0aW8gaW4gcmF0aW9zXG4gICAgdyA9IDEwMCAqIHJhdGlvIC0gZyArIHJhdGlvICogZ1xuXG4gIHJldHVybiB3ICsgJyUnXG5cbi8qKlxuICogQW4gYWxpYXMgZm9yIHRoZSBjb2x1bW4td2lkdGggZnVuY3Rpb24uXG4gKi9cbmN3ID0gY29sdW1uLXdpZHRoXG5cbi8qKlxuICogR2V0IHRoZSBndXR0ZXIgc2l6ZSBvZiBhIGNvbHVtbiBhbmQgbm90aGluZyBlbHNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpb3M9MV0gLSBBIHdpZHRoIHJlbGF0aXZlIHRvIGl0cyBjb250YWluZXIgYXMgYSBmcmFjdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZz1qZWV0Lmd1dHRlcl0gLSBTcGVjaWZ5IHRoZSBndXR0ZXIgd2lkdGggYXMgYSBwZXJjZW50YWdlIG9mIHRoZSBjb250YWluZXJzIHdpZHRoLlxuICovXG5jb2x1bW4tZ3V0dGVyKHJhdGlvcyA9IDEsIGcgPSBqZWV0Lmd1dHRlcilcbiAgcmF0aW9zID0gamVldC1yZXZlcnNlKHJhdGlvcykgdW5sZXNzIGplZXQucGFyZW50LWZpcnN0IGlzIHRydWVcbiAgdyA9IDEwMFxuXG4gIGZvciByYXRpbyBpbiByYXRpb3NcbiAgICBnID0gZyAvIHcgKiAxMDBcblxuICByZXR1cm4gZyArICclJ1xuXG4vKipcbiAqIEFuIGFsaWFzIGZvciB0aGUgY29sdW1uLWd1dHRlciBmdW5jdGlvbi5cbiAqL1xuY2cgPSBjb2x1bW4tZ3V0dGVyXG5cbi8qKlxuICogU3R5bGUgYW4gZWxlbWVudCBhcyBhIGNvbHVtbiB3aXRob3V0IGFueSBndXR0ZXJzIGZvciBhIHNlYW1sZXNzIHJvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW9zPTFdIC0gQSB3aWR0aCByZWxhdGl2ZSB0byBpdHMgY29udGFpbmVyIGFzIGEgZnJhY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldD0wXSAtIEEgb2Zmc2V0IHNwZWNpZmllZCBhcyBhIGZyYWN0aW9uIChzZWUgcmF0aW9zKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY3ljbGU9MF0gLSBFYXNpbHkgY3JlYXRlIGFuIG50aCBjb2x1bW4gZ3JpZCB3aGVyZSBjeWNsZSBlcXVhbHMgdGhlIG51bWJlciBvZiBjb2x1bW5zLlxuICogQHBhcmFtIHtudW1iZXJ9IFt1bmN5Y2xlPTBdIC0gVW5kbyBhIHByZXZpb3VzIGN5Y2xlIHZhbHVlIHRvIGFsbG93IGZvciBhIG5ldyBvbmUuXG4gKi9cbnNwYW4ocmF0aW8gPSAxLCBvZmZzZXQgPSAwLCBjeWNsZSA9IDAsIHVuY3ljbGUgPSAwKVxuICBzaWRlID0gamVldC1nZXQtbGF5b3V0LWRpcmVjdGlvbigpXG4gIG9wcG9zaXRlLXNpZGUgPSBvcHBvc2l0ZS1wb3NpdGlvbihzaWRlKVxuICBzcGFuLXdpZHRoID0gamVldC1nZXQtc3BhbihyYXRpbylcbiAgbWFyZ2luLXIgPSAwXG4gIG1hcmdpbi1sID0gbWFyZ2luLXJcblxuICB1bmxlc3Mgb2Zmc2V0ID09IDBcbiAgICBpZiBvZmZzZXQgPCAwXG4gICAgICBvZmZzZXQgKj0gLTFcbiAgICAgIG1hcmdpbi1yID0gamVldC1nZXQtc3BhbihvZmZzZXQpXG4gICAgZWxzZVxuICAgICAgbWFyZ2luLWwgPSBqZWV0LWdldC1zcGFuKG9mZnNldClcblxuICBjZigpXG4gIGZsb2F0OiBzaWRlXG4gIGNsZWFyOiBub25lXG4gIHRleHQtYWxpZ246IGluaGVyaXRcbiAgd2lkdGg6IChzcGFuLXdpZHRoKSVcbiAgbWFyZ2luLXtzaWRlfTogKG1hcmdpbi1sKSVcbiAgbWFyZ2luLXtvcHBvc2l0ZS1zaWRlfTogKG1hcmdpbi1yKSVcblxuICBpZiBjeWNsZSAhPSAwXG4gICAgJjpudGgtY2hpbGQoe2N5Y2xlfW4pXG4gICAgICBmbG9hdDogb3Bwb3NpdGUtc2lkZVxuICAgICY6bnRoLWNoaWxkKHtjeWNsZX1uICsgMSlcbiAgICAgIGNsZWFyOiBib3RoXG5cbiAgaWYgdW5jeWNsZSAhPSAwXG4gICAgJjpudGgtY2hpbGQoe3VuY3ljbGV9bilcbiAgICAgIGZsb2F0OiBzaWRlXG4gICAgJjpudGgtY2hpbGQoe3VuY3ljbGV9biArIDEpXG4gICAgICBjbGVhcjogbm9uZVxuXG4vKipcbiAqIFJlb3JkZXIgY29sdW1ucyB3aXRob3V0IGFsdGVyaW5nIHRoZSBIVE1MLlxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpb3M9MF0gLSBTcGVjaWZ5IGhvdyBmYXIgYWxvbmcgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gbW92ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sLW9yLXNwYW49Y29sdW1uXSAtIFNwZWNpZnkgd2hldGhlciB0aGUgZWxlbWVudCBoYXMgYSBndXR0ZXIgb3Igbm90LlxuICogQHBhcmFtIHtudW1iZXJ9IFtndXR0ZXI9amVldC5ndXR0ZXJdIC0gU3BlY2lmeSB0aGUgZ3V0dGVyIHdpZHRoIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgY29udGFpbmVycyB3aWR0aC5cbiAqL1xuc2hpZnQocmF0aW9zID0gMCwgY29sLW9yLXNwYW4gPSBjb2x1bW4sIGd1dHRlciA9IGplZXQuZ3V0dGVyKVxuICB0cmFuc2xhdGUgPSAnJ1xuICBzaWRlID0gamVldC1nZXQtbGF5b3V0LWRpcmVjdGlvbigpXG5cbiAgaWYgc2lkZSA9PSByaWdodFxuICAgIHJhdGlvcyA9IGplZXQtcmVwbGFjZS1udGgocmF0aW9zLCAwLCByYXRpb3NbMF0gKiAtMSlcblxuICBpZiBjb2wtb3Itc3BhbiA9PSBjb2x1bW4gb3IgY29sLW9yLXNwYW4gPT0gY29sIG9yIGNvbC1vci1zcGFuID09IGNcbiAgICBjb2x1bW4td2lkdGhzID0gamVldC1nZXQtY29sdW1uKHJhdGlvcywgZ3V0dGVyKVxuICAgIHRyYW5zbGF0ZSA9IGNvbHVtbi13aWR0aHNbMF0gKyBjb2x1bW4td2lkdGhzWzFdXG4gIGVsc2VcbiAgICB0cmFuc2xhdGUgPSBqZWV0LWdldC1zcGFuKHJhdGlvcylcblxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgbGVmdDogKHRyYW5zbGF0ZSklXG5cbi8qKlxuICogUmVzZXQgYW4gZWxlbWVudCB0aGF0IGhhcyBoYWQgc2hpZnQoKSBhcHBsaWVkIHRvIGl0LlxuICovXG51bnNoaWZ0KClcbiAgcG9zaXRpb246IHN0YXRpY1xuICBsZWZ0OiAwXG5cbi8qKlxuICogVmlldyB0aGUgZ3JpZCBhbmQgaXRzIGxheWVycyBmb3IgZWFzeSBkZWJ1Z2dpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yPWJsYWNrXSAtIFRoZSBiYWNrZ3JvdW5kIHRpbnQgYXBwbGllZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltcG9ydGFudD1mYWxzZV0gLSBXaGV0aGVyIHRvIGFwcGx5IHRoZSBzdHlsZSBhcyAhaW1wb3J0YW50LlxuICovXG5lZGl0KGNvbG9yID0gYmxhY2ssIGltcG9ydGFudCA9IGZhbHNlKVxuICBpZiBpbXBvcnRhbnRcbiAgICAqXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKGNvbG9yLCA1JSkgIWltcG9ydGFudFxuICBlbHNlXG4gICAgKlxuICAgICAgYmFja2dyb3VuZDogcmdiYShjb2xvciwgNSUpXG5cbi8qKlxuICogIEFsaWFzIGZvciBlZGl0KCkuXG4gKi9cbmRlYnVnID0gZWRpdFxuXG4vKipcbiAqIEhvcml6b250YWxseSBjZW50ZXIgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4LXdpZHRoPWplZXQubWF4LXdpZHRoXSAtIFRoZSBtYXggd2lkdGggdGhlIGVsZW1lbnQgY2FuIGJlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtwYWQ9MF0gLSBTcGVjaWZ5IHRoZSBlbGVtZW50J3MgbGVmdCBhbmQgcmlnaHQgcGFkZGluZy5cbiAqL1xuY2VudGVyKG1heC13aWR0aCA9IGplZXQubWF4LXdpZHRoLCBwYWQgPSAwKVxuICBjZigpXG4gIHdpZHRoOiBhdXRvXG4gIG1heC13aWR0aDogbWF4LXdpZHRoXG4gIGZsb2F0OiBub25lXG4gIGRpc3BsYXk6IHVucXVvdGUoJ2Jsb2NrJylcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXG4gIHBhZGRpbmctbGVmdDogcGFkXG4gIHBhZGRpbmctcmlnaHQ6IHBhZFxuXG4vKipcbiAqIFVuY2VudGVyIGFuIGVsZW1lbnQuXG4gKi9cbnVuY2VudGVyKClcbiAgbWF4LXdpZHRoOiBub25lXG4gIG1hcmdpbi1yaWdodDogMFxuICBtYXJnaW4tbGVmdDogMFxuICBwYWRkaW5nLWxlZnQ6IDBcbiAgcGFkZGluZy1yaWdodDogMFxuXG4vKipcbiAqIFN0YWNrIGFuIGVsZW1lbnQgc28gdGhhdCBub3RoaW5nIGlzIGVpdGhlciBzaWRlIG9mIGl0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtwYWQ9MF0gLSBTcGVjaWZ5IHRoZSBlbGVtZW50J3MgbGVmdCBhbmQgcmlnaHQgcGFkZGluZy5cbiAqIEBwYXJhbSB7Ym9sbGVhbi9zdHJpbmd9IFthbGlnbj1mYWxzZV0gLSBTcGVjaWZ5IHRoZSB0ZXh0IGFsaWduIGZvciB0aGUgZWxlbWVudC5cbiAqL1xuc3RhY2socGFkID0gMCwgYWxpZ24gPSBmYWxzZSlcbiAgc2lkZSA9IGplZXQtZ2V0LWxheW91dC1kaXJlY3Rpb24oKVxuICBvcHBvc2l0ZS1zaWRlID0gb3Bwb3NpdGUtcG9zaXRpb24oc2lkZSlcblxuICBkaXNwbGF5OiB1bnF1b3RlKCdibG9jaycpXG4gIGNsZWFyOiBib3RoXG4gIGZsb2F0OiBub25lXG4gIHdpZHRoOiAxMDAlXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXG4gIG1hcmdpbi1yaWdodDogYXV0b1xuXG4gICY6Zmlyc3QtY2hpbGRcbiAgICBtYXJnaW4te3NpZGV9OiBhdXRvXG5cbiAgJjpsYXN0LWNoaWxkXG4gICAgbWFyZ2luLXtvcHBvc2l0ZS1zaWRlfTogYXV0b1xuXG4gIGlmIHBhZCAhPSAwXG4gICAgcGFkZGluZy1sZWZ0OiBwYWRcbiAgICBwYWRkaW5nLXJpZ2h0OiBwYWRcblxuICBpZiAoYWxpZ24gaXMgbm90IGZhbHNlKVxuICAgIGlmIChhbGlnbiA9PSBjZW50ZXIpIG9yIChhbGlnbiA9PSBjKVxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgaWYgKGFsaWduID09IGxlZnQpIG9yIChhbGlnbiA9PSBsKVxuICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgIGlmIChhbGlnbiA9PSByaWdodCkgb3IgKGFsaWduID09IHIpXG4gICAgICB0ZXh0LWFsaWduOiByaWdodFxuXG4vKipcbiAqIFVuc3RhY2sgYW4gZWxlbWVudC5cbiAqL1xudW5zdGFjaygpXG4gIHNpZGUgPSBqZWV0LWdldC1sYXlvdXQtZGlyZWN0aW9uKClcbiAgb3Bwb3NpdGUtc2lkZSA9IG9wcG9zaXRlLXBvc2l0aW9uKHNpZGUpXG5cbiAgdGV4dC1hbGlnbjogc2lkZVxuICBkaXNwbGF5OiBpbmxpbmVcbiAgY2xlYXI6IG5vbmVcbiAgd2lkdGg6IGF1dG9cbiAgbWFyZ2luLWxlZnQ6IDBcbiAgbWFyZ2luLXJpZ2h0OiAwXG5cbiAgJjpmaXJzdC1jaGlsZFxuICAgIG1hcmdpbi17c2lkZX06IDBcblxuICAmOmxhc3QtY2hpbGRcbiAgICBtYXJnaW4te29wcG9zaXRlLXNpZGV9OiAwXG5cbi8qKlxuICogQ2VudGVyIGFuIGVsZW1lbnQgb24gZWl0aGVyIG9yIGJvdGggYXhlcy5cbiAqIEByZXF1aXJlcyBBIHBhcmVudCBjb250YWluZXIgd2l0aCByZWxhdGl2ZSBwb3NpdGlvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGlyZWN0aW9uPWJvdGhdIC0gU3BlY2lmeSB3aGljaCBheGVzIHRvIGNlbnRlciB0aGUgZWxlbWVudCBvbi5cbiAqL1xuYWxpZ24oZGlyZWN0aW9uID0gYm90aClcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2RcblxuICBpZiAoZGlyZWN0aW9uID09IGhvcml6b250YWwpIG9yIChkaXJlY3Rpb24gPT0gaClcbiAgICBsZWZ0OiA1MCVcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcbiAgZWxzZSBpZiAoZGlyZWN0aW9uID09IHZlcnRpY2FsKSBvciAoZGlyZWN0aW9uID09IHYpXG4gICAgdG9wOiA1MCVcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSlcbiAgZWxzZVxuICAgIHRvcDogNTAlXG4gICAgbGVmdDogNTAlXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcblxuLyoqXG4gKiBBcHBseSBhIGNsZWFyZml4IHRvIGFuIGVsZW1lbnQuXG4gKi9cbmNmKClcbiAgKnpvb206IDFcblxuICAmOmJlZm9yZSwgJjphZnRlclxuICAgIGNvbnRlbnQ6ICcnXG4gICAgZGlzcGxheTogdGFibGVcblxuICAmOmFmdGVyXG4gICAgY2xlYXI6IGJvdGhcbiJdfQ== */"] });


/***/ }),

/***/ "5e2E":
/*!***********************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: PokemonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailComponent", function() { return PokemonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");







function PokemonDetailComponent_mat_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r3.type.name, " ");
} }
function PokemonDetailComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ability_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ability_r4.ability.name, " ");
} }
function PokemonDetailComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r5.stat.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r5.base_stat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", stat_r5.base_stat);
} }
class PokemonDetailComponent {
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.pokemonDetail = [];
    }
    ngOnInit() {
        this.getPokemon('', 1);
    }
    getPokemon(link, id) {
        this.dataService.getPokemon(link, id)
            .subscribe((data) => {
            this.pokemonDetail.push({
                name: data.name,
                types: data.types,
                front_default: data.sprites.other.dream_world.front_default,
                weight: data.weight,
                height: data.height,
                stats: data.stats,
                abilities: data.abilities
            });
            this.pokemonDetail = this.pokemonDetail[0];
        });
    }
}
PokemonDetailComponent.ɵfac = function PokemonDetailComponent_Factory(t) { return new (t || PokemonDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PokemonDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonDetailComponent, selectors: [["pokemon-detail"]], decls: 34, vars: 7, consts: [[1, "wrapper"], [1, "detail-header"], [1, "section"], ["mat-button", "", "aria-label", "Back", "routerLink", "/", 1, "btn-back"], [1, "material-icons"], [1, "pokemon-name"], ["class", "elements", 4, "ngFor", "ngForOf"], [1, "pokemon-image"], ["alt", "", 3, "src"], [1, "detail-content"], ["mat-align-tabs", "center"], ["label", "About"], [1, "table-info"], ["class", "ability", 4, "ngFor", "ngForOf"], ["label", "Base stats"], [4, "ngFor", "ngForOf"], [1, "elements"], [1, "element"], [1, "ability"], ["mode", "determinate", 1, "progress-bar", 3, "value"]], template: function PokemonDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonDetailComponent_mat_list_8_Template, 3, 1, "mat-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Weight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Height ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Abilities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PokemonDetailComponent_span_30_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PokemonDetailComponent_tr_33_Template, 7, 3, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonDetail.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonDetail.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pokemonDetail.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonDetail.weight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonDetail.height, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonDetail.abilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonDetail.stats);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n.material-icons[_ngcontent-%COMP%] {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -moz-font-feature-settings: 'liga';\n  -moz-osx-font-smoothing: grayscale;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.section[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 2rem 1.2rem;\n}\n.detail-header[_ngcontent-%COMP%] {\n  background: #76d7c4;\n  position: relative;\n  min-height: 23rem;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  border: 0;\n  color: #fff;\n  cursor: pointer;\n}\n.btn-back[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.pokemon-name[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1.2rem 0 0.3rem;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.elements[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.mat-list-item.element[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.2);\n  display: inline-block;\n  width: auto;\n  height: auto;\n  margin: 0.2rem;\n  padding: 0.2rem 0;\n  color: #fff;\n  border-radius: 1rem;\n}\n.pokemon-image[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 10rem;\n  max-height: 10rem;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n.pokemon-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.detail-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  max-width: 600px;\n  margin: 0 auto;\n  border-top-right-radius: 2.5rem;\n  border-top-left-radius: 2.5rem;\n  transform: translateY(-3rem);\n}\n.table-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0;\n}\n.ability[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: capitalize;\n}\n.ability[_ngcontent-%COMP%]    + .ability[_ngcontent-%COMP%]:before {\n  content: ',';\n  margin: 0 5px 0 0;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n\n@media screen and (min-width: 800px) {\n  .detail-content[_ngcontent-%COMP%] {\n    border-radius: 2.5rem;\n    box-shadow: 0 2px 2px rgba(0,0,0,0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNxRSxzRUFBQTtBQU9yRTtFQUNJLDZCQUFhO0VBQ2IsbUJBQWE7RUFDYixrQkFBWTtFQUNaLGVBQVc7RUFDWCxjQUFhO0VBQ2Isc0JBQWdCO0VBQ2hCLG9CQUFnQjtFQUNoQixxQkFBUztFQUNULG1CQUFhO0VBQ2IsaUJBQVc7RUFDWCxjQUFXO0VBQ1gsa0NBQTRCO0VBQzVCLGtDQUF5QjtBQU43QjtBQVFBO0VBQ0ksc0JBQVc7QUFOZjtBQVFBO0VBQ0ksZ0JBQVU7RUFDVixXQUFNO0VBQ04sY0FBTztFQUNQLG9CQUFRO0FBTlo7QUFRQTtFQUNJLG1CQUFXO0VBQ1gsa0JBQVM7RUFDVCxpQkFBVztBQU5mO0FBUUE7RUFDSSx1QkFBVztFQUNYLFVBQVE7RUFDUixTQUFPO0VBQ1AsV0FBTTtFQUNOLGVBQU87QUFOWDtBQVFJO0VBQ0ksYUFBUTtBQU5oQjtBQVFJO0VBQ0ksZUFBVztBQU5uQjtBQVFBO0VBQ0ksY0FBUTtFQUNSLHVCQUFPO0VBQ1AsV0FBTTtFQUNOLGlCQUFVO0VBQ1YsZ0JBQVk7RUFDWiwwQkFBZTtBQU5uQjtBQVFBO0VBQ0ksU0FBTztFQUNQLFVBQVE7QUFOWjtBQVFBO0VBQ0ksaUNBQVc7RUFDWCxxQkFBUTtFQUNSLFdBQU07RUFDTixZQUFPO0VBQ1AsY0FBTztFQUNQLGlCQUFRO0VBQ1IsV0FBTTtFQUNOLG1CQUFjO0FBTmxCO0FBUUE7RUFDSSxrQkFBUztFQUNULGdCQUFVO0VBQ1YsaUJBQVc7RUFDWCxZQUFPO0VBQ1AsU0FBSztFQUNMLDJCQUFVO0VBQ1YsVUFBUTtBQU5aO0FBUUk7RUFDSSxlQUFVO0FBTmxCO0FBUUE7RUFDSSxrQkFBUztFQUNULGdCQUFXO0VBQ1gsZ0JBQVU7RUFDVixjQUFPO0VBQ1AsK0JBQXdCO0VBQ3hCLDhCQUF1QjtFQUN2Qiw0QkFBVTtBQU5kO0FBUUE7RUFDSSxXQUFPO0VBQ1AsY0FBTztBQU5YO0FBUUE7RUFDSSxxQkFBUTtFQUNSLDBCQUFlO0FBTm5CO0FBUUE7RUFDSSxZQUFRO0VBQ1IsaUJBQU87QUFOWDtBQVFBO0VBQ0ksZ0JBQVU7QUFOZDtBQVNBOzs7RUFMRTtBQWNGOzs7RUFWRTtBQWVtQztFQUVqQztJQUNJLHFCQUFjO0lBQ2QscUNBQVc7RUFkakI7QUFDRiIsImZpbGUiOiJwb2tlbW9uLWRldGFpbC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9qZWV0L3N0eWx1cy9qZWV0L2luZGV4J1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7XHJcblxyXG4vLyBDb2xvcnNcclxuYy1ncmF5ID0gI2YyZjJmZlxyXG5cclxuXHJcbi8vIFN0eWxlc1xyXG4ubWF0ZXJpYWwtaWNvbnNcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHJcbipcclxuICAgIGJveC1zaXppbmcgYm9yZGVyLWJveFxyXG5cclxuLnNlY3Rpb25cclxuICAgIG1heC13aWR0aCA2MDBweFxyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgbWFyZ2luIDAgYXV0b1xyXG4gICAgcGFkZGluZyAycmVtIDEuMnJlbVxyXG5cclxuLmRldGFpbC1oZWFkZXJcclxuICAgIGJhY2tncm91bmQgIzc2RDdDNFxyXG4gICAgcG9zaXRpb24gcmVsYXRpdmVcclxuICAgIG1pbi1oZWlnaHQgMjNyZW1cclxuXHJcbi5idG4tYmFja1xyXG4gICAgYmFja2dyb3VuZCB0cmFuc3BhcmVudFxyXG4gICAgcGFkZGluZyAwXHJcbiAgICBib3JkZXIgMFxyXG4gICAgY29sb3Igd2hpdGVcclxuICAgIGN1cnNvciBwb2ludGVyXHJcblxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIG91dGxpbmUgbm9uZVxyXG5cclxuICAgIC5tYXRlcmlhbC1pY29uc1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgMnJlbVxyXG5cclxuLnBva2Vtb24tbmFtZVxyXG4gICAgZGlzcGxheSBibG9ja1xyXG4gICAgbWFyZ2luIDEuMnJlbSAwIC4zcmVtXHJcbiAgICBjb2xvciB3aGl0ZVxyXG4gICAgZm9udC1zaXplIDEuNXJlbVxyXG4gICAgZm9udC13ZWlnaHQgNTAwXHJcbiAgICB0ZXh0LXRyYW5zZm9ybSBjYXBpdGFsaXplXHJcblxyXG4uZWxlbWVudHNcclxuICAgIG1hcmdpbiAwXHJcbiAgICBwYWRkaW5nIDBcclxuXHJcbi5tYXQtbGlzdC1pdGVtLmVsZW1lbnRcclxuICAgIGJhY2tncm91bmQgcmdiYSh3aGl0ZSwgLjIpXHJcbiAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgd2lkdGggYXV0b1xyXG4gICAgaGVpZ2h0IGF1dG9cclxuICAgIG1hcmdpbiAuMnJlbVxyXG4gICAgcGFkZGluZyAuMnJlbSAwXHJcbiAgICBjb2xvciB3aGl0ZVxyXG4gICAgYm9yZGVyLXJhZGl1cyAxcmVtXHJcblxyXG4ucG9rZW1vbi1pbWFnZVxyXG4gICAgcG9zaXRpb24gYWJzb2x1dGVcclxuICAgIG1heC13aWR0aCAxMHJlbVxyXG4gICAgbWF4LWhlaWdodCAxMHJlbVxyXG4gICAgYm90dG9tIDFyZW1cclxuICAgIGxlZnQgNTAlXHJcbiAgICB0cmFuc2Zvcm0gdHJhbnNsYXRlWCgtNTAlKVxyXG4gICAgei1pbmRleCAyXHJcblxyXG4gICAgaW1nXHJcbiAgICAgICAgbWF4LXdpZHRoIDEwMCVcclxuXHJcbi5kZXRhaWwtY29udGVudFxyXG4gICAgcG9zaXRpb24gcmVsYXRpdmVcclxuICAgIGJhY2tncm91bmQgd2hpdGVcclxuICAgIG1heC13aWR0aCA2MDBweFxyXG4gICAgbWFyZ2luIDAgYXV0b1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgMi41cmVtXHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDIuNXJlbVxyXG4gICAgdHJhbnNmb3JtIHRyYW5zbGF0ZVkoLTNyZW0pXHJcblxyXG4udGFibGUtaW5mb1xyXG4gICAgd2lkdGggIDEwMCVcclxuICAgIG1hcmdpbiAyMHB4IDBcclxuXHJcbi5hYmlsaXR5XHJcbiAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgdGV4dC10cmFuc2Zvcm0gY2FwaXRhbGl6ZVxyXG5cdFxyXG4uYWJpbGl0eSArIC5hYmlsaXR5OmJlZm9yZVxyXG4gICAgY29udGVudCAnLCdcclxuICAgIG1hcmdpbiAwIDVweCAwIDBcclxuXHJcbi5wcm9ncmVzcy1iYXJcclxuICAgIG1pbi13aWR0aCAxMDBweFxyXG5cclxuXHJcbi8qICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSBcclxuICpcdERFU0tUT1AgQU5EIFVQXHJcbiAqICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG4gKi9cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kICggbWluLXdpZHRoOiAxMDAwcHggKVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDEwMDBweCApIGFuZCAoIG1pbi13aWR0aDogODAxcHggKVxyXG5cclxuLyogIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIFxyXG4gKlx0VEFCTEVUXHJcbiAqICAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG4gKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWluLXdpZHRoOiA4MDBweCApXHJcblxyXG4gICAgLmRldGFpbC1jb250ZW50XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyAyLjVyZW1cclxuICAgICAgICBib3gtc2hhZG93IDAgMnB4IDJweCByZ2JhKGJsYWNrLCAuMilcclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA4MDBweCApIGFuZCAoIG1pbi13aWR0aCA1MDBweCApIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DataService {
    constructor(http) {
        this.http = http;
        this.api = 'https://pokeapi.co/api/v2/pokemon';
    }
    getData(offset, limit) {
        const url = `${this.api}?offset=${offset}&limit=${limit}`;
        return this.http.get(url);
    }
    getPokemon(link, id) {
        const url = link ? link : `${this.api}/${id}`;
        return this.http.get(url);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_pokemon_catalog_pokemon_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pokemon-catalog/pokemon-catalog.component */ "0zwn");
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ "5e2E");



class AppComponent {
    constructor() {
        this.title = 'pokemon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "pokemon-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "pokemon-detail");
    } }, directives: [_components_pokemon_catalog_pokemon_catalog_component__WEBPACK_IMPORTED_MODULE_1__["PokemoCatalogComponent"], _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_2__["PokemonDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnN0eWwifQ== */"] });


/***/ }),

/***/ "VrDm":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["user-profile"]], decls: 2, vars: 0, template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnN0eWwifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _components_pokemon_catalog_pokemon_catalog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pokemon-catalog/pokemon-catalog.component */ "0zwn");
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ "5e2E");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "VrDm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: 'pokemon/:id', pathMatch: 'full', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'profile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"], pathMatch: 'full' },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_pokemon_catalog_pokemon_catalog_component__WEBPACK_IMPORTED_MODULE_6__["PokemoCatalogComponent"],
        _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_7__["PokemonDetailComponent"],
        _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map