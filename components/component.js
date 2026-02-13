export class Component {
    #element = null;
    #tagname = 'div'

    constructor(tagName = 'div') {
      this.#tagname = tagName ?? this.#tagname;
    }

    set html(content) {
      const wrapper = document.createElement(this.#tagname);
      const contentTrimmed = content?.trim() || '';
      wrapper.innerHTML = contentTrimmed;
      const elem = wrapper.firstElementChild;

      if (this.#element && this.#element.parentNode) {
        // Заменяем старый элемент новым в родителе
        this.#element.parentNode.replaceChild(elem, this.#element);
      }

      this.#element = elem;
    }

    get element() {
      return this.#element;
    }

    remove() {
      if (this.#element) {
        this.#element.remove();
      }
    }

    destroy() {
      this.#element = null;
    }
}