import "./styles.css";

// function Dog(name, sound) {
//   this.type = "개";
//   this.name = name;
//   this.sound = sound;
// }
// function Cat(name, sound) {
//   this.type = "고양이";
//   this.name = name;
//   this.sound = sound;
// }

// Dog.prototype.say = function () {
//   console.log(this.sound);
// };

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}
//call(this,param)
//this: 이 객체 생성자 함수에서의 this
//param: 상속하는 생성자의 파타미터

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

//프로토타입 공유
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();
