import { TODOLIST2 } from "../adatok.js";
import Model from "../Modell/Model.js";
import Tablazat from "../View/Tablazat.js";

export default class Controller{

    constructor(){
        const szuloElem = $(".tablazat");
        new Model(TODOLIST2)
        new Tablazat(szuloElem,TODOLIST2);
        
        
        $(window).on("torles",(event) => {
            console.log(event.detail);
            const index = event.detail;
            if (index > -1){
                TODOLIST2.splice(index, 1);
            }
            szuloElem.empty();
            new Tablazat(szuloElem, TODOLIST2);
            
        })
    }
}