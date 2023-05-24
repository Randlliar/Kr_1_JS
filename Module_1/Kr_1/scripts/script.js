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
alert('Хотя бы один автомобиль продаётся? ' + atLeastOneForSale);

var allYoungerThanFive = (mercedes.carAge < 5 && BMW.carAge < 5 && audi.carAge < 5);
alert('Все авто младше 5 лет? ' + allYoungerThanFive);

var atLeastOneHasLittleHp = (mercedes.hp < 250  && BMW.hp < 250  && audi.hp < 250 )
alert('Хоть один автомобиль имеет менее 250 лошадиных сил? ' + atLeastOneHasLittleHp);

// ________________________________________________

var car = BMW;

if (car.name === mercedes.name && car.model === mercedes.model) {
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
    russianColor = 'черная';
    break;
  case 'silver':
    russianColor = 'серебристая';
    break;
  case 'red':
    russianColor = 'красная';
    break;
  case 'white':
    russianColor = 'белая';
    break;
  case 'gray':
    russianColor = 'серая';
    break;
  case 'blue':
    russianColor = 'синяя';
    break;
  default:
    russianColor = 'невозможно определить цвет автомобиля';
    break;
}

alert('Цвет машины: ' + russianColor);