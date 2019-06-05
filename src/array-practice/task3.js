/**
 * Реализовать функцию forEachRight в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - функция, применяющаяся на массив
 *
 * Результатом работы функции forEachRight,
 * будет вывод элементов массива в обратном порядке в консоль.
 * Одно значение - один вывод (построчно)
 *
 * forEachRight([1, 2, 3, 4], val => console.log(val)); -> в консоль 4 3 2 1
 */

// метод без второго аргумента - ф-ции.Как по мне - более оптимальный и экономичный

function forEachRight(arr, rev) {
  // eslint-disable-next-line no-redeclare
  var arr;
  var arg = arr.reduse(function rev(arr, current) {
    arr.reverse();
    var current;
    // eslint-disable-next-line no-console
    console.log(current);
  }, 0);
}

forEachRight([4, 5, 6]);
