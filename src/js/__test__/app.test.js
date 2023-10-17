import {
    team, character, teamBirdman, character2, coolTeam,
  } from '../app';
  
  test('тест на корректное добавление персонажа', () => {
    team.add(character);
    expect(team.toArray()).toEqual(teamBirdman);
  });
  
  test('тест на ошибку при дублировании персонажа', () => {
    expect(() => {
      team.add(character);
      team.add(character);
    }).toThrow(new Error('Такой объект уже существует!'));
  });
  
  test('тест на корректное добавление двух и более персонажей', () => {
    team.addAll(character, character2);
    expect(team.toArray()).toEqual(coolTeam);
  });