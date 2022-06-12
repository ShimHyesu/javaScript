import "./styles.css";

let age = prompt("나이", "");

function checkAge1(age) {
  age > 18 ? true : confirm("보호자의 동의를 ");
}
function checkAge2(age) {
  return age > 18 || confirm("보호자의 동의를 ");
}

checkAge1(age);
checkAge2(age);
