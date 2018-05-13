import Component from './component.js';

class Server extends Component {
  dom() {
    return this.container(this.text());
  };

  container(...children) {
    const container = document.createElement('div');
    container.classList.add('server');

    for(const child of children) {
      container.appendChild(child);
    };

    return container;
  };

  text() {
    const textContainer = document.createElement('p');
    textContainer.classList.add('server__text');

    const text = document.createTextNode('Server');
    textContainer.appendChild(text);

    return textContainer;
  };
};

export default Server;