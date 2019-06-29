/**
 * Просто преобразовать содержимое функции task8Old под современный код,
 * а именно, содержимое метода calculateNumsFive
 *
 * Пример вызова
 * console.log(task8Old()); -> [0, 5, 10, 15]
 */

export function task8Old() {
  var obj = {
    nums: [0, 2, 5, 10, 15],
    fives: [],
    calculateNumsFive: function() {
      var self = this;
      this.nums.forEach(function(v) {
        //насколько читал -> this в forEach теряется, нужен редьюс или фильтер
        if (v % 5 === 0) {
          self.fives.push(v);
        }
      });

      return self.fives;
    },
  };

  return obj.calculateNumsFive();
}

// Напишите реализацию функции task8Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

/*не понял, что именно было нужно преобразовать в новый стандарт => 
поменял forEach с костылём под this на норм решение с редьюсом*/
export function task8New() {
  const obj = {
    nums: [0, 2, 5, 10, 15],
    fives: [],
    calculateNumsFive: function() {
      this.nums.reduce(function(acc, item) {
        if (item % 5 === 0) {
          obj.fives.push(item);
        }
        return false;
      });
      return this.fives;
    },
  };

  return obj.calculateNumsFive();
}
task8New();
