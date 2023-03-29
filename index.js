
//Що виведе код нижче?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); //ответ: 1 

//Вбудована функція setTimeout використовує колбек-функції. Створіть альтернативу яка базується на промісах.
//Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then:

function delay(ms) {
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, ms);
    });
  }

delay(3000).then(() => alert('виконалось через 3 секунди'));

//Створіть функцію, яка повертає об'єкт Promise. Обіцяйте повернути число після затримки 2 секунди.

function delayReturningNumber() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(42);
    }, 2000);
  });
}

delayReturningNumber().then(function(result) {
  alert(result); // 42
});

//Створіть функцію, яка приймає масив чисел та повертає Promise, що виконується після знаходження максимального числа в масиві.

function maxNumberPromise(numbers) {
  return new Promise(function(resolve, reject){
    if(Array.isArray(numbers) && numbers.length > 0) {
      const maxNumber = Math.max(...numbers);
      resolve(maxNumber);
    } else {
      reject('error')
    }
  });
}

const numbers = [2,4,66,4,222,768,1];
maxNumberPromise(numbers)
.then(maxNumber => console.log(`Максимальное число: ${maxNumber}`))
.catch(error => console.error(`Ошибка: ${error}`));