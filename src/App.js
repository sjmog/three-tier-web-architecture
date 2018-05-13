import Component from './component.js'

class App extends Component {
  constructor(elementId, ...children) {
    super(...children);
    this.elementId = elementId;
  };

  dom() {
    return document.getElementById(this.elementId);
  };
};

export default App;