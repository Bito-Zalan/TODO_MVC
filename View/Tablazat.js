import Sor from "./Sor.js";

export default class Tablazat {
    #lista = [];

    constructor(szuloElem, lista){
        this.#lista = lista;
        
        szuloElem.append('<table class="table table-bordered table-striped">');
        this.tablaElem = szuloElem.children("table");
        console.log(this.tablaElem);
        
        this.tablazatGeneral();
    }

    tablazatGeneral(){
       for (let index = 0; index < this.#lista.length; index++) {
        const element = this.#lista[index];
        new Sor(this.tablaElem,element);
       }
    }
}