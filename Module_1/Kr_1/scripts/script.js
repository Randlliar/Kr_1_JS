var year = 2023;


var mercedes = {
  name: 'Mercedes',
  model: 'GL450',
  engine: 4,
  year: 2015,
  color: 'black',
  hp: 300,
  forSale: true,
  carAge: year - 2015,
}

var BMW = {
  name: 'BMW',
  model: 'X6',
  engine: 3.0,
  year: 2018,
  color: 'white',
  hp: 313,
  forSale: false,
  carAge: year - 2018,

}

var audi = {
  name: 'Audi',
  model: 'Q7',
  engine: 3.0,
  year: 2021,
  color: 'blue',
  hp: 249,
  forSale: true,
  carAge: year - 2021,
}

var names = mercedes.name + ' ' + mercedes.model + ', ' + BMW.name + ' ' + BMW.model + ', ' + audi.name + ' ' + audi.model;
alert(names);

var averageAge = (mercedes.carAge + BMW.carAge + audi.carAge) / 3;
alert(averageAge);

var atLeastOneForSale = (mercedes.forSale || BMW.forSale || audi.forSale);
alert(atLeastOneForSale);

var allYoungerThanFive = (mercedes.carAge < 5 && BMW.carAge < 5 && audi.carAge < 5);
alert(allYoungerThanFive);

var atLeastOneHasLittleHp = (mercedes.hp < 250  && BMW.hp < 250  && audi.hp < 250 )
alert(atLeastOneHasLittleHp);

// ________________________________________________

var car = audi;

if (car.model === mercedes.name && car.model === mercedes.model) {
  alert('Мой любимый мерседес!');
} else {
  alert('Это - ' + car.name + ' ' + car.model)
}

if (car.carAge === 0) {
  alert('Новый автомобиль');
} else if (car.carAge > 0 && car.carAge <= 3) {
  alert('Свежий автомобиль');
} else if (car.carAge > 3) {
  alert('Лет этому авто: ' + car.carAge);
} else {
  alert('Неверный возраст');
}


var consumption = (car.engine <= 3.0) ? ('Экономичный автомобиль') : ('Прожорливый автомобиль');

alert(consumption)


var russianColor = car.color;

switch (russianColor) {
  case 'black':
    alert('Черная');
    break;
  case 'silver':
    alert('Серебристый');
    break;
  case 'red':
    alert('красный');
    break;
  case 'white':
    alert('белый');
    break;
  case 'gray':
    alert('серый');
    break;
  case 'blue':
    alert('синий');
    break;
  default:
    alert('Невозможно определить цвет автомобиля');
    break;
}

