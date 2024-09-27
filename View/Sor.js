export default class Sor {
  #adat = {};

  constructor(szuloElem, adat) {
    this.tablaElem = szuloElem;
    this.#adat = adat;
    this.#sorMegjelenit();
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.torolElem = this.sorElem.children("td").children(".torol");
    this.megseElem = this.sorElem.children("td").children(".megse");

    this.keszElem.on("click", () => {
      console.log(this);
    });
    this.torolElem.on("click", () => {
      console.log(this);
      const index = this.tablaElem.children().index(this.sorElem);
      const e = new CustomEvent("torles", {detail: index});
      window.dispatchEvent(e);
    });
    this.megseElem.on("click", () => {
      console.log(this);
    });
  }

  #sorMegjelenit() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    txt += `<td><span class="kesz"><button>✔️</button></span> <span class="torol"><button>🗑</button></span></td>`;
    txt += `</tr>`;

    this.tablaElem.append(txt);
  }

}
