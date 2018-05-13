import Component from './component.js';

class Database extends Component {
  dom() {
    return this.container(this.text());
  };

  container(...children) {
    const container = document.createElement('div');
    container.classList.add('database');

    for(const child of children) {
      container.appendChild(child)
    };

    return container;
  };

  text() {
    const textContainer = document.createElement('p');
    textContainer.classList.add('database__text');

    const text = document.createTextNode('Database');
    textContainer.appendChild(text);

    return textContainer;
  };
};

export default Database;