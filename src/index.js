import "./styles.css";

const object = { a: 1 };
// a, b값을 바깥으로 꺼내주기 위해
// const { a, b } = object;

// console.log(a);
// console.log(b);

//비구조화 할당 문법: 함수의 파타메터에서도 사용 가능
// function print({ a, b = 2 }) {
//   console.log(a);
//   console.log(b);
// }

// print(object);

//비구조화 할당시 '='사인으로 기본값 설정 가능
const { a, b = 2 } = object;
console.log(a);
console.log(b);

//비구조화 할당시 이름 바꾸는 방법
const animal = {
  name: "멍멍이",
  type: "개"
};

const { name: nickname } = animal;

console.log(nickname);
console.log(animal);

//배열 비구조화 할당 -> 객체 비구조화 할당과 비슷
const array = [1];

// const one = array[0];
// const two = array[1];

const [one, two = 2] = array;

console.log(one);
console.log(two);

//객체 깊숙한 곳에 들어있는 값 꺼내기
const deepObject = {
  state: {
    information: {
      name: "k",
      languages: ["korean", "chinese", "english"]
    }
  },
  value: 5
};

//방법 1: 비구조화 할당 두번
// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

//방법2: 비구조화 할당 한번
const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

//value 생략
//특정 객체 만들때 특정 key이름으로 선언된 값 이미 있으면 value 설정 생략 가능
const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
