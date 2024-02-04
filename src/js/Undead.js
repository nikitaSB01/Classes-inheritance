import Character from './Character';

export default class Undead extends Character {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}
