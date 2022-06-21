import "./styles.css";

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

//어떤 값을 재사용하고 싶을때
//prototype의 역할: 객체 생성자로 무엇을 만들었을 때
//그걸로 만든 객체끼리 공유할 수 있는 값이나 함수
Animal.prototype.sharedValue = 1;

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

// function say() {
//   console.log(this.sound);
// }
// dog.say = say;
// cat.say = say;

dog.say();
cat.say();
dog.sharedValue;
