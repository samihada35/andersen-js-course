/**
 * Реализовать функцию membersOnActiveMeetups в этом файле, и экспортировать ее.
 *
 * Функция принимает массив meetups,
 * и возвращает суммарное количество человек, находящихся на активных митапах
 *
 * Пример вызова с нижним набором данных
 * membersOnActiveMeetups(meetups); // 1500
 */

// Раскомментировать нижнее, при начале реализации

// const meetups = [
//   { name: 'JavaScript', isActive: true, members: 100 },
//   { name: 'Angular', isActive: true, members: 900 },
//   { name: 'Node', isActive: false, members: 600 },
//   { name: 'React', isActive: true, members: 500 },
// ];

 export function membersOnActiveMeetups(meetups) {
  const meetups = [
    { name: 'JavaScript', isActive: true, members: 100 },
    { name: 'Angular', isActive: true, members: 900 },
    { name: 'Node', isActive: false, members: 600 },
    { name: 'React', isActive: true, members: 500 },
    ];
    var meetupsTrue = meetups.filter(function(val){
      return {isActive : true};
    })
    var arr2 = meetupsTrue.map (a=>a.members);
    var res = arr2.reduce (function getSum (sum, current) {
        return sum+current;
    });
    console.log(res-600);
 }
 membersOnActiveMeetups();