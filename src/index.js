import "./styles.css";

let str = "Hello";

str.test = 5;

alert(str.test);

//str의 프로퍼티에 접근하려 하면 래퍼 객체 만들어짐
//엄격모드: An error
//비 엄격 모드: undefined
//라패 객체에 프로퍼티 test 추가 그런데 래퍼 객체 바로 삭제됨. test 못 찾음
