const Entity = require('./Entity').Entity;
const Key = require('./Key').Key;

class Player extends Entity {
  constructor (x = 0, y = 0) {
    super(x, y);

    // these may be remapped later
    this.keyUp = new Key(87); // W
    this.keyLeft = new Key(65); // A
    this.keyDown = new Key(83); // S
    this.keyRight = new Key(68); // D
    this.keyAction = new Key(32); // SPACE
  }
}

// other possible properties: weight, sprite, collision flag, etc

exports.Player = Player;