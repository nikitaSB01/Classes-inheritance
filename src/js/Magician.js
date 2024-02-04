import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}
