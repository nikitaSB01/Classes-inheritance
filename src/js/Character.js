const typePlayers = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        'Ошибка. Допускаются только имена длиной от 2 символов и не более 10',
      );
    }
    if (typePlayers.includes(type) === false) {
      throw new Error('Неверное значение типа персонажа!');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack * 2) / 10;
      this.defence += (this.defence * 2) / 10;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего)))');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
export default Character;
