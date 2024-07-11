import Team from './Team';

const chars = [
    {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      },
      {
        name: 'Маг',
        type: 'Wizzard',
        health: 40,
        level: 1,
        attack: 80,
        defence: 10
      },
      {
        name: 'Воин',
        type: 'Warrior',
        health: 150,
        level: 1,
        attack: 20,
        defence: 80
      }
];

const team = new Team();
chars.forEach(char => team.addList(char));

for (let char of team) {
    console.log(char);
}