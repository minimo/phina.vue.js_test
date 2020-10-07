/* eslint-disable */
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init() {
    this.superInit()
    this.backgroundColor = 'black';
    this.label = Label({
      text: 'Hello Vue.js + Phina.js',
      fill: 'white',
      x: this.gridX.center(),
      y: this.gridY.center()
    }).addChildTo(this);
  }
});
