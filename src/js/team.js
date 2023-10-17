export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Такой объект уже существует!');
      }
  
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach((item) => this.members.add(item)); // добавляем несколько объектов (characters) в множество members
    }
  
    toArray() {
      return Array.from(this.members); //преобразуем множество members в массив и возвращает его
    }
  }