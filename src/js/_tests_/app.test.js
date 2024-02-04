import Character from '../Character';
import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

const player = new Character('Niki', 'Daemon');
//  console.log(player);

test('class Character', () => {
  expect(player).toEqual({
    name: 'Niki',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('Неверное имя', () => {
  expect(() => new Character('R', 'Undead')).toThrow();
});
test('Неверный тип', () => {
  expect(() => new Character('Ron', 'noType')).toThrow();
});

test('Верный ввод Bowman', () => {
  const received = new Bowerman('Ron', 'Bowman');
  const expected = {
    name: 'Ron',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод Daemon', () => {
  const received = new Daemon('Ron', 'Daemon');
  const expected = {
    name: 'Ron',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод Magician', () => {
  const received = new Magician('Ron', 'Magician');
  const expected = {
    name: 'Ron',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод Swordsman', () => {
  const received = new Swordsman('Ron', 'Swordsman');
  const expected = {
    name: 'Ron',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод Undead', () => {
  const received = new Undead('Ron', 'Undead');
  const expected = {
    name: 'Ron',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод Zombie', () => {
  const received = new Zombie('Ron', 'Zombie');
  const expected = {
    name: 'Ron',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Проверка повышения уровня', () => {
  const received = new Zombie('Ron', 'Zombie');
  received.levelUp();
  const expected = {
    name: 'Ron',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});

test('Умер или нет', () => {
  expect(() => {
    const received = new Zombie('Ron', 'Zombie');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});

test('Проверка нанесения урона', () => {
  const received = new Zombie('Ron', 'Zombie');
  received.damage(10);
  const expected = {
    name: 'Ron',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
