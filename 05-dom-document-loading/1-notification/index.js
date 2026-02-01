import { Component } from '../../components/component.js';
export default class NotificationMessage extends Component {
    static currentNotification = null;

    #message = '';
    duration = 2000;
    #type = 'success';

    constructor(message = '', { duration = 2000, type = 'success'} = {}) {
      super();

      this.#message = message;
      this.duration = duration;
      this.#type = type;

      this.render();
    }

    get animationDuration () {
      return this.duration ? this.duration / 1000 : 0;
    }

    show(target = document.body) {
      if (NotificationMessage.currentNotification) {
        NotificationMessage.currentNotification.remove();
      }

      NotificationMessage.currentNotification = this;

      target.append(this.element);
      setTimeout(() => this.remove(), this.duration);
    }

    template() {
      return `
        <div class="notification ${this.#type}" style="--value:${this.animationDuration}s">
            <div class="timer"></div>
            <div class="inner-wrapper">
            <div class="notification-header">${this.#type}</div>
            <div class="notification-body">
                ${this.#message}
            </div>
            </div>
        </div>`;
    }

    render() {
      this.html = this.template();
    }
}
