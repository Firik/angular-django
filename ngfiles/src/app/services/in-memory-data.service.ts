import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    
    let tasks = [
      {
        id: 0, 
        status: 0,
        day: 1,
        month: 7,
        year: 2017,
        timeStart: '09:00', 
        timeEnd: '18:00', 
        description: 'Реализовать задачу "P2P Moneta.ru" 6/10'
      },
      {
        id: 1, 
        status: 1, 
        day: 1,
        month: 7,
        year: 2017,
        timeStart: '10:00', 
        timeEnd: '13:00', 
        description: 'Принять участие в обсуждении "Доставка 3.0 + P2P"'
      },
      {
        id: 2, 
        status: 1, 
        day: 1,
        month: 7,
        year: 2017,
        timeStart: '09:00', 
        timeEnd: '18:00', 
        description: 'Реализовать задачу "P2P Moneta.ru" 7/10'
      },
      {
        id: 3, 
        status: 1, 
        day: 1,
        month: 7,
        year: 2017,
        timeStart: '11:00', 
        timeEnd: '12:00', 
        description: 'Реализовать задачу "KK-88 Убрать излишние триггеры"'
      },
    ];
    
    return {heroes, tasks};
    
  }
}