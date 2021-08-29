const schools = ['Yorktown', 'Washington & Lee', 'Wakefield'];

console.log(schools.join(', '));

const wschools = schools.filter((school) => school[0] === 'W');

console.log(wschools);

const cutSchool = (cut, list) => {
  return list.filter((school) => school !== cut);
};

console.log(cutSchool('Washington & Lee', schools).join(', '));

console.log(schools.join('\n'));

const hightSchool = schools.map((school) => `${school} Hight School`);

console.log(hightSchool.join('\n'));

const objSchool = schools.map((school) => ({ name: school }));

console.log(objSchool);

let universaty = [
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' },
];

const editName = (oldName, name, arr) => {
  return arr.map((item) => {
    if (item.name === oldName) {
      return {
        ...item,
        name,
      };
    } else {
      return item;
    }
  });
};

let updateUniversaty = editName('Stratford', 'HB Woodlawn', universaty);

console.log(updateUniversaty[1]);

console.log(universaty[1]);

const aSchools = {
  Yorktown: 10,
  'Washington & Lee': 2,
  Wakefield: 5,
};

const aSchoolArray = Object.keys(aSchools).map((key) => ({
  name: key,
  wins: aSchools[key],
}));

console.log(aSchoolArray);

const ages = [21, 18, 40, 42, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

console.log('maxAge', maxAge);

const colors = [
  {
    id: '-xekare',
    title: 'rad red',
    rating: 3,
  },
  {
    id: '-jbwsof',
    title: 'big blue',
    rating: 2,
  },
  {
    id: '-prigbj',
    title: 'grizzly grey',
    rating: 5,
  },
  {
    id: '-ryhbhsl',
    title: 'banana',
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);

const col = ['red', 'red', 'green', 'blue', 'green'];

const distinColor = col.reduce(
  (distin, color) =>
    distin.indexOf(color) !== -1 ? distin : [...distin, color],
  []
);

console.log(distinColor);

const involeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log('Welcom!');

const showBuy = () => console.log('Good buy!');

// involeIf(true, showWelcome(), showBuy());

// involeIf(false, showWelcome(), showBuy());

const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

const log = userLogs('grandpa23');

log('attempted to load 20 fake members');

const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

countdown(10, (value) => console.log(value));

const dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'Deacon',
      },
    },
  },
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.');
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first];
};

console.log(deepPick('type', dan));

console.log(deepPick('data.info.fullname.first', dan));

const template = 'hh:mm:ss tt';

const cloockTime = template
  .replace('hh', '03')
  .replace('mm', '33')
  .replace('ss', '22')
  .replace('tt', 'PM');

console.log(cloockTime);

function getClockTime() {
  // Получение текущего времени
  var date = new Date();
  var time = '';
  // Выстраивание последовательности показания часов
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: 'AM',
  };
  // Преобразование показания времени в гражданский формат
  if (time.hours == 12) {
    time.ampm = 'PM';
  } else if (time.hours > 12) {
    time.ampm = 'PM';
    time.hours -= 12;
  }
  // Подстановка 0 к показанию часов, чтобы получалась пара цифр
  if (time.hours < 10) {
    time.hours = '0' + time.hours;
  }
  // Подстановка 0 к показанию минут, чтобы получалась пара цифр
  if (time.minutes < 10) {
    time.minutes = '0' + time.minutes;
  }
  // Подстановка 0 к показанию секунд, чтобы получалась пара цифр
  if (time.seconds < 10) {
    time.seconds = '0' + time.seconds;
  }
  // Придание показаниям часов формата строки "hh:mm:ss tt"
  return time.hours + ':' + time.minutes + ':' + time.seconds + ' ' + time.ampm;
}

function logCloockTime() {
  let time = getClockTime();
  console.clear();
  console.log(time);
}

setInterval(logCloockTime, 1000);
