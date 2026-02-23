import { Component } from "../../components/component.js";

export default class SortableList extends Component {
  constructor() {
    super();

    this.render();
  }

  #template() {
    return `<div></div>`;
  }

  render() {
    this.html = this.#template();
  }
    

}
