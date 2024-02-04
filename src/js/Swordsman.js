import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}
