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

//решение через обычную функцию
export function forEachRight(arr, rev) {
  function rev () {
    var arr1 = arr.reverse();
	  console.log (arr1);
  }
rev(arr);
}
forEachRight([4, 5, 6]);

// решение через коллбек-функцию
export function forEachRight (arr, valy) {
  arr1 = arr.reverse();
  if (typeof valy === 'function') {
     return valy(arr1);
  }
}
forEachRight([4, 5, 6], val => console.log(val));