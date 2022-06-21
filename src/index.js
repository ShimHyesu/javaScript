import "./styles.css";

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);

//객체에서 프로퍼티 가져오는 것과
//객체의 프로토타입에서 프로퍼티 가져오는 것 사이 성능적 차이 없음
console.time("pocket");
alert(pockets.glasses);
console.timeEnd("pocket");

console.time("head");
alert(head.glasses);
console.timeEnd("head");
