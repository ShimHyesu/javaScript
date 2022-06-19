import "./styles.css";

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

/*
let usersMapped = users.map(function (obj) {
  let robj = {};

  robj.fullName = obj.name + obj.surname;
  robj.id = obj.id;

  return robj;
});
*/

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
//화살표 함수 우측 괄호: 객체의 시작임을 인지하기 위해~

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith
