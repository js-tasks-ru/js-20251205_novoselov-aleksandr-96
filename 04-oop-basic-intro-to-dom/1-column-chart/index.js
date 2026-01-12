import { Component } from '../../components/component.js';

export default class ColumnChart extends Component {
  #data = [];
  #label = '';
  #value = 0;
  #link = '#';

  constructor({ data, label, value, link = '#'}) {
    super();

    this.#data = data ?? this.#data;
    this.#label = label ?? this.#label;
    this.#value = value ?? this.#value;
    this.#link = link ?? this.#link;

    this.#render();
  }

  #template() {
    return this.#data?.length === 0 
      ? ` <div class="column-chart column-chart_loading" style="--chart-height: 50">
            <div class="column-chart__title">
              Total ${this.#label}
              <a class="column-chart__link" href="${this.#link}">View all</a>
            </div>
            <div class="column-chart__container">
              <div data-element="header" class="column-chart__header">
                344
              </div>
              <div data-element="body" class="column-chart__chart">
              </div>
            </div>
          </div>
        `
      : ` <div class="column-chart" style="--chart-height: 50">
            <div class="column-chart__title">
              Total ${this.#label}
            </div>
            <div class="column-chart__container">
              <div data-element="header" class="column-chart__header">${this.#value}</div>
              <div data-element="body" class="column-chart__chart">
                <div style="--value: 12" data-tooltip="25%"></div>
                <div style="--value: 16" data-tooltip="33%"></div>
                <div style="--value: 8" data-tooltip="17%"></div>
                <div style="--value: 33" data-tooltip="67%"></div>
                <div style="--value: 14" data-tooltip="29%"></div>
                <div style="--value: 6" data-tooltip="13%"></div>
                <div style="--value: 25" data-tooltip="50%"></div>
                <div style="--value: 8" data-tooltip="17%"></div>
                <div style="--value: 6" data-tooltip="13%"></div>
                <div style="--value: 18" data-tooltip="38%"></div>
                <div style="--value: 50" data-tooltip="100%"></div>
                <div style="--value: 41" data-tooltip="83%"></div>
                <div style="--value: 35" data-tooltip="71%"></div>
                <div style="--value: 41" data-tooltip="83%"></div>
                <div style="--value: 4" data-tooltip="8%"></div>
                <div style="--value: 2" data-tooltip="4%"></div>
              </div>
            </div>
          </div>
    `;
  }

  #render() {
    this.html = this.#template();
  }
}
