import "./styles.css";

let arr = [5, 2, 1, -10, 8];

// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
/*
arr.sort((a, b) => a - b);
arr.reverse();
*/
arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10
