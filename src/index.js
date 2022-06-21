import "./styles.css";

class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  //메서드: 클래스 내부에 구현하는 함수
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을/를 파는 음식점들: `);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노");

const chicken = new Food("치킨");
chicken.addBrand("굽네");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();
