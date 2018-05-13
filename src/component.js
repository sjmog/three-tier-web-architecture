class Component {
  constructor(...children) {
    this.children = children;
  };

  render () {
    const self = this.dom();
    this.renderChildren(self);

    return self;
  };

  renderChildren (parent) {
    for(var i = 0; i < this.children.length; i++) {
      parent.appendChild(
        this.children[i].render(this)
      )
    };
  };
};

export default Component;