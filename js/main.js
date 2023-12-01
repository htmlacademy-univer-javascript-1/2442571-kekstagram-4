const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let idArray = [];
let idUrl = [];

function generateId(a, b, array) {
  let number = getRandomInteger(a, b);
  while (array.includes(number)) {
    number = getRandomInteger(a, b);
  }
  array.push(number);
  return number;
}

function generateIdComment() {
  let number = getRandomInteger(0, Number.MAX_SAFE_INTEGER);
  while (idArray.includes(number)) {
    number = getRandomInteger(0, Number.MAX_SAFE_INTEGER);
  }
  idArray.push(number);
  return number;
}

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const comment = () => {
  const RANDOM_ID_MASSAGE = getRandomInteger(0, MASSAGES.length - 1);
  const RANDOM_ID_NAMES = getRandomInteger(0, NAMES.length - 1);
  const RANDOM_ID_AVATAR = getRandomInteger(1, 6);
  const RANDOM_ID = generateIdComment();
  return {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_ID_AVATAR}.svg`,
    message: MASSAGES[RANDOM_ID_MASSAGE],
    name: NAMES[RANDOM_ID_NAMES]
  };
};

const object = () => {
  const RANDOM_NUM_COMMENTS = getRandomInteger(0, 30);
  const RANDOM_NUM_LIKES = getRandomInteger(15, 200);
  const RANDOM_ID_OBJECT = generateId(1, 25, idArray);
  const RANDOM_ID_URL = generateId(1, 25, idUrl);

  return {
    id: RANDOM_ID_OBJECT,
    url:`photos/${RANDOM_ID_URL}.jpg`,
    description: 'photo',
    likes: RANDOM_NUM_LIKES,
    comments: Array.from({ length: RANDOM_NUM_COMMENTS }, () => comment())
  };
};

const objectArray = Array.from({ length: 25 }, object);
console.log(objectArray);
