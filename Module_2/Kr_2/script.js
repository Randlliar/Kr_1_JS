let clients = [
  {
    firstName: "Александр",
    lastName: "Иванчук",
    date: "11-29-1990",
    phone: "8 (929) 988-90-09",
    amounts: [2546, 2098, 764, 7266]
  },
  {
    firstName: "Анатолий",
    lastName: "Стаценко",
    date: "02-12-1987",
    phone: null,
    amounts: [563, 8287, 889]
  },
  {
    firstName: "Марина",
    lastName: "Петрова",
    date: " 07-26-1997",
    phone: "8 (899) 546-09-08",
    amounts: [6525, 837, 1283, 392]
  },
  {
    firstName: "Иван",
    lastName: "Караванов",
    date: " 09-12-1999",
    phone: null,
    amounts: [7634, 283, 9823, 3902]
  },
  {
    firstName: "Оксана",
    lastName: "Абрамова",
    date: "01-24-2002",
    phone: "8 (952) 746-99-22",
    amounts: [342, 766, 362]
  }
];

let newClient = {};
newClient = clients;

//Part 1 pt 1-2

//
// function checkInfo(array) {
//   for (let i = 0; i < array.length; i++) {
//     showInfo(array[i]);
//   }
// }
//
// function showInfo(info) {
//   console.log(info.firstName + " " + info.lastName + " " + info.date + " " + info.phone);
// }
//
//
// checkInfo(newClient);
// console.log(newClient);

//Part 1 pt 3-5


function addToAmount(param) {
  for (let i = 0; i < param.length; i++) {
    // console.log(newClient[i].amounts = []);
    while (confirm("Добавить покупку для клиента " + newClient[i].firstName)) {
      let sum = prompt('Введите сумму покупки клиента: '+ newClient[i].firstName);
      if (sum) {
        newClient[i].amounts.push(sum);
      } else {
        break;
      }
    }
  }
}

addToAmount(newClient);

console.log(newClient);

//



