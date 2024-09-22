import Team from '../team';
import Character from '../character';

const team = new Team();
const character1 = new Character('Pavel');
const character2 = new Character('Petr');
const character3 = new Character('Alex');

test('testing add method', () => {
  team.add(character1);
  expect(team.toArray()).toContain(character1);
});

test('testing throwing an error when adding the same player', () => {
  expect(() => team.add(character1)).toThrowError(`Персонаж ${character1.name} уже был добавлен в команду`);
});

test('testing addAll method', () => {
  team.addAll(character1, character2, character3);
  expect(team.toArray()).toContain(character1);
  expect(team.toArray()).toContain(character2);
  expect(team.toArray()).toContain(character3);
});
