let clients = [
  {
    firstName: "Александр",
    lastName: "Иванчук",
    date: "06-05-1987",
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


//Part 1 pt 1-2
let newClient = {};
newClient.firstName = prompt("Введите имя ");
newClient.lastName = prompt("Введите фамилию ");
newClient.date = prompt("Введите дату в формате dd-mm-yyyy) ");
newClient.phone = prompt("Введите телефон ");

// console.log(newClient);
//

//Part 1 pt 3-5

newClient.amounts = [];
//+ equal parseInt
while (confirm("Добавить покупку для клиента " + newClient.firstName)) {
  newClient.amounts.push(+prompt('Введите сумму покупки клиента: ' + newClient.firstName));
}


clients.push(newClient);


console.log(clients);

//Part 2

//Pt 1

function fullName(obj) {
  // console.log(obj.firstName + " " + obj.lastName);
  return obj.firstName + " " + obj.lastName;
}

fullName(clients[0]);

//Pt 2

function getBirthday(str) {
  let localDate = new Date(str);
  let dateNow = new Date(Date.now());


  let options = {
    day: 'numeric',
    month: 'long',

  };
  if (localDate.getDate() === dateNow.getDate() && localDate.getMonth() === dateNow.getMonth()) {
    // console.log(localDate.toLocaleString('ru',
    //     options) + "(сегодня)");
    return localDate.toLocaleString('ru',
      options) + "(сегодня)";
  } else {
    // console.log(localDate.toLocaleString('ru',
    //     options));
    return localDate.toLocaleString('ru',
      options);
  }

}

// getBirthday(clients[0].date);

//Pt 3

function getAllAmount(num) {
  let sumOfAmounts = 0;

  for (let i = 0; i < num.length; i++) {
    sumOfAmounts += num[i];
  }
  return sumOfAmounts;
}

getAllAmount(clients[0].amounts);

//Pt 4

function getAverageAmount(avg) {
  let averageAmount = getAllAmount(avg) / avg.length;
  // console.log(averageAmount.toFixed(1));
  return averageAmount.toFixed(1);
}

// getAverageAmount(clients[0].amounts);


//Pt 6-7


let showClients = ((arr) => {

  for (let i = 0; i < arr.length; i++) {
    console.log("Клиент " + arr[i].firstName + " имеет среднюю сумму чека " + getAverageAmount(arr[i].amounts) + ". " + "День рожения клиента: " + getBirthday(arr[i].date));
    // return "Клиент " + arr[i].firstName + " имеет среднюю сумму чека " + getAverageAmount(arr[i].amounts) + ". " + "День рожения клиента: " + getBirthday(arr[i].date);
  }
})

// showClients(clients);

//Pt 8

try {
  showClients();
} catch (e) {
  console.log("Вызвана функция без параметров");
  console.log(e);
}

//Pt 9

let bestClients = [
  {
    firstName: "Даниил",
    lastName: "Иванчук",
    date: "06-05-1987",
    phone: "8 (929) 988-90-09",
    amounts: [2546, 4444, 764, 523]
  },
  {
    firstName: "Василий",
    lastName: "Стаценко",
    date: "02-12-1987",
    phone: null,
    amounts: [5463, 8287, 889]
  },
  {
    firstName: "Арина",
    lastName: "Петрова",
    date: " 07-26-1997",
    phone: "8 (899) 546-09-08",
    amounts: [5421, 231, 454, 866]
  }
];


//Pt 10
// setTimeout(showClients, 3000, bestClients);

//Pt 11

function whoSpentMore(arr) {
  let maxSum = 0;
  let personWithMaxSum = {};
  for (let i = 0; i < arr.length; i++) {
    if (getAllAmount(arr[i].amounts) > maxSum) {
      maxSum = getAllAmount(arr[i].amounts);
      personWithMaxSum = fullName(arr[i]);

    }
  }
  console.log("Больше всех потратил " + personWithMaxSum + ". Сумма покупок: " + maxSum);
}

whoSpentMore(clients);

