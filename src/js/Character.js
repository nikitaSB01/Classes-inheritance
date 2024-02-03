const type_players = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];
export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name === "string" && name.length >= 2 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error("Невалидное имя персонажа!");
    }
    if (type_players.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Неверное значение типа персонажа!");
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
