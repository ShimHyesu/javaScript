import "./styles.css";

//자바스크립트에서는 ES6부터 class문법 도입됨
class Animal {
  //생성자의 역할
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  //함수를 만들게되면 자동으로 프로토타입으로 등록됨
  say() {
    console.log(this.sound);
  }
}

console.log(Animal.prototype.say);

//상속 훨씬 더 쉽게할 수 있음
class Dog extends Animal {
  //constructor만 선언하면 됨
  // ->기존 Animal에서 사용하는 constructor덮어씀
  // -> super키워드: Animal가지고 있는 consturctor 먼저 호출 후 자신 처리
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");
const cat2 = new Cat("야오옹이", "야오오옹");

dog.say();
cat.say();
cat2.say();

//결국 객체 생성자와 프로토타입을 조금 더 쉽게 사용하기 위해 만들어진 문법임
