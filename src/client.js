import Component from './component.js';

class Client extends Component {
  dom() {
    return this.container(this.text());
  };

  container(...children) {
    const container = document.createElement('div');
    container.classList.add('client');

    for(const child of children) {
      container.appendChild(child);
    };

    return container;
  };

  text() {
    const textContainer = document.createElement('p');
    textContainer.classList.add('client__text');

    const text = document.createTextNode('Client');
    textContainer.appendChild(text);

    return textContainer;
  };
};

export default Client;