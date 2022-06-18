import "./styles.css";

alert((1.35).toFixed(20)); // 1.4

alert((6.35).toFixed(20)); // 6.3
//정밀도 손실  -> 소수점 버림 발생

alert((6.35 * 10).toFixed(20));
alert(Math.round(6.35 * 10) / 10);
