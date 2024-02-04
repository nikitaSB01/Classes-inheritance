import Character from './Character';

class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    /* this.name = name;
    this.type = type; */
    this.attack = 25;
    this.defence = 25;
  }
}
export default Bowerman;
