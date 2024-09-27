export default class Model {
  #ADATOK = [];

  constructor(adatok) {
    this.#ADATOK = adatok;
  }

  torles(index) {
    this.#ADATOK.splice(index, 1);
  }
  kesz(index) {
    this.#ADATOK[index].kesz = true;
  }
  megse(index) {
    this.#ADATOK[index] = false;
  }

  ujadatHozzaadasa(ujAdat){
    this.#ADATOK.push(ujAdat)
  }
  
  hatralevoFeladatokSzama(){
    return this.#ADATOK.filter()
  }
  elvegzettFeladatok() {}
  hataridoigHatralevoNap() {}
  kovetkezoHatarido() {}
}
