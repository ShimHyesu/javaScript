import "./styles.css";

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    //if (key !== undefined) return false;
    //반복문 실행하다 프로퍼티 하나라도 있으면 그 즉시 false 반환
    return false;
  }
  return true;
}
