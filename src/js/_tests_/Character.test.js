import Character from '../Character';

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
/* test('lifePlayer function return text value', () => {
  const healthy = lifePlayer({ name: 'Маг', health: 90 });
  expect(healthy).toBe('healthy');
  expect(errorValue).toBe('Передано некорректное значение');
  expect(errorValueHealth).toBe('Значение health некорректное');
}) */
