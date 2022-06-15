import "./styles.css";

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

for (let key in menu) {
  alert(key + menu[key]);
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
